import mongoose from "mongoose";

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect(process.env.DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch(() => {
      return console.log(`Erro na conexão com o banco:${err}`);
    });
};
