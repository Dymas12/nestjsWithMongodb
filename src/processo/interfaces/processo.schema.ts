import * as mongoose from 'mongoose';

export const ProcessoSchema = new mongoose.Schema(
  {
    idLocal: String,

    statusVerificacao: [
      {
        numcorretos: Number,
        numrestantes: Number,
        numobservacao: Number,
        numincorretos: Number,
      },
    ],
    patrimonios: [
      {
        name: String,
        observacoes: String,
        statuspratimonio: Number,
      },
      {
        observacoes: String,
        fotoObservcoes:String

      }
    ],
  },
  { timestamps: true, collection: 'Processos' },
);
