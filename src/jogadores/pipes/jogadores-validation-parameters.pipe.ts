import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class JogadoresValidacaoParametrosPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`Value: ${value} ... metadata:${metadata.type}` )

    return value
  }
}
