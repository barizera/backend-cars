import CarsServices from "../services/cars.services.js";

const carsServices = new CarsServices();

class CarsControllers {
  //getAll
  async getAllCars(req, res) {
    try {
      const allCars = await carsServices.getAllCars();

      res.send(allCars);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }
  //getById
  async getCarById(req, res) {
    const id = req.params.id;

    const selectedCar = await carsServices.getCarById({ id });

    res.send(selectedCar);
  }
  //create
  async createCar(req, res) {
    const { name, color, brand, category, img } = req.body;

    try {
      const newCar = await carsServices.createCar({
        name,
        color,
        brand,
        category,
        img,
      });

      res.send(newCar);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send("Carro já cadastrado");
      }
    }
  }
  //update
  async updateCar(req, res) {
    const { name, color, brand, category, img } = req.body;
    const id = req.params.id;

    try {
      const updatedCar = await carsServices.updateCar({
        name,
        color,
        brand,
        category,
        img,
        id,
      });

      res.send(updatedCar);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send("Carro já cadastrado");
      }
    }
  }
  //delete
  async deleteCar(req, res) {
    const id = req.params.id;

    const car = await carsServices.deleteCar({ id });
    res.status(200).send(car);
  }
}

export default CarsControllers;
