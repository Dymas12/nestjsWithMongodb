import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('APIREST')
  .setDescription('API description')
  .setVersion('1.0')
  .addTag('patrimovel')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api1', app, document);
  await app.listen(8080);
}
bootstrap();
