import mongoose from "mongoose";

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect("mongodb://localhost:27017/cars-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("MONGO DB CONECTADO");
    })
    .catch(() => {
      return console.log(`Erro na conexão com o banco:${err}`);
    });
};
