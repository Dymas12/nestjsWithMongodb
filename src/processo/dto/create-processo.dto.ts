import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateProcessoDto {
  @IsNotEmpty()
    idLocal: string;
  idProcesso:String;
}
