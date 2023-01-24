import { Module } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { ProcessoController } from './processo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProcessoSchema } from './interfaces/processo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Processo', schema: ProcessoSchema}]) ],
  controllers: [ProcessoController],
  providers: [ProcessoService]
})
export class ProcessoModule {}
