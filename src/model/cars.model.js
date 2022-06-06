import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CarsSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    color: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    img: { type: String, required: true },
  },
  { versionKey: false }
);

const Cars = model("cars", CarsSchema);

export default Cars;
