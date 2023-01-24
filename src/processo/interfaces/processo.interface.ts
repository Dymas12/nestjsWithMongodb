import { Document } from 'mongoose';
import { Timestamp, TimestampProvider } from 'rxjs';

export interface Processo extends Document {
  idLocal: string;
  statusverificacao: [{
    numcorretos:Number,
    numrestantes:Number,
    numobservacao:Number,
    numincorretos:Number

  }];
  patrimonios:[{
    name:String,
    observacoes:String,
    statuspratimonio:Number
  },
  {
    observacoes: String,
    fotoObservcoes:String,
   
  }]
}
