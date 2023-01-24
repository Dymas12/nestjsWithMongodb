import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import {ProcessoService  } from './processo.service';
import { CreateProcessoDto } from './dto/create-processo.dto';
import { UpdateProcessoDto } from './dto/update-processo.dto';

@Controller('processo')
export class ProcessoController {
  constructor(private readonly processoService: ProcessoService) {}

  @Post('/novoProcesso')
  create(@Body() createProcessoDto: CreateProcessoDto) {
    return this.processoService.criar(createProcessoDto);
  }
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.processoService.consultarProcesso(id);
   }
 
  @Put('atualizarprocesso/:id')
  update(@Param('id') id: string, @Body() updateProcessoDto: UpdateProcessoDto) {
    return this.processoService.atualizarProcesso(id, updateProcessoDto);
  }
}
