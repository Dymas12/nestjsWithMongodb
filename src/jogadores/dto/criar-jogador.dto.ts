import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CriarJogadorDto {

    @IsNotEmpty()
    readonly telefoneCelular:string;
    @IsEmail()
    readonly email:string;
   @IsNotEmpty()
    readonly name:string;
}