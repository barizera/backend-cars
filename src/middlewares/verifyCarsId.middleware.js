import Cars from "../model/cars.model.js";

import mongoose from "mongoose";

const verifyCarsIdmiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return response.status(400).send({ message: "ID inválido!" });
  }

  const car = await Cars.findById(id);
  if (!car) {
    return res.status(404).send("Carro não encontrado");
  }
  next();
};

export default verifyCarsIdmiddleware;
