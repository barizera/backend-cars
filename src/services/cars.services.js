import Cars from "../model/cars.model.js";

class CarsServices {
  //getAll
  async getAllCars() {
    const cars = await Cars.find();

    if (cars.length === 0) {
      throw { status: 404, message: "Nenhuma miniatura entrontada" };
    }
    return cars;
  }
  //getById
  async getCarById({ id }) {
    const selectedCar = await Cars.findById(id);
    return selectedCar;
  }
  //create
  async createCar({ name, color, brand, category, img }) {
    const newCar = {
      name,
      color,
      brand,
      category,
      img,
    };

    const car = await Cars.create(newCar);
    return car;
  }
  //update
  async updateCar({ name, color, brand, category, img, id }) {
    const updatedCar = {
      name,
      color,
      brand,
      category,
      img,
      id,
    };

    await Cars.updateOne({ _id: id }, updatedCar);
    const car = await Cars.findById(id);
    return car;
  }
  //delete
  async deleteCar({ id }) {
    const car = await Cars.findByIdAndDelete(id);
    return car;
  }
}

export default CarsServices;
