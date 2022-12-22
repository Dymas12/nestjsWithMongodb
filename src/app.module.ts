import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://ruanvg:ESCOLA01@cluster0.rnxg0ym.mongodb.net/smartranking?retryWrites=true&w=majority',
      {
        useNewUrlParser: true
      },
    ),
    JogadoresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
