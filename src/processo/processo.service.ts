import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProcessoDto } from '../processo/dto/create-processo.dto';
import { Processo } from '../processo/interfaces/processo.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateProcessoDto } from './dto/update-processo.dto';

@Injectable()
export class ProcessoService {
  constructor(
    @InjectModel('Processo') private readonly processoModel: Model<Processo>,
  ) {}

  private readonly logger = new Logger(ProcessoService.name);

  async criar(criaProcessoDto: CreateProcessoDto): Promise<Processo> {
    console.log(criaProcessoDto)
  const jogadorCriado = new this.processoModel(criaProcessoDto);
  return await jogadorCriado.save();
}

  async consultarProcesso(id: string): Promise<Processo> {
    const processoEncontrado = await this.processoModel
      .findOne({ id })
      .exec();
    if (!processoEncontrado) {
      throw new NotFoundException(`Processo com o id:${id} não encontrado`);
    }
    return processoEncontrado;
  }
  
  async atualizarProcesso (id:string, atualizarProcessoDto: UpdateProcessoDto) : Promise<Processo>{
    try {
      const updatedData = await this.processoModel.findByIdAndUpdate(id, atualizarProcessoDto, { new: true });
      return updatedData;
    } catch (error) {
      throw new Error('Error updating data');
    }
  }
}
