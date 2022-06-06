import { Router } from "express";
import CarsControllers from "../controllers/cars.controllers.js";
import verifyCarsIdmiddleware from "../middlewares/verifyCarsId.middleware.js";
import verifyDataCarsMiddleware from "../middlewares/verifyDataCars.middlewares.js";

const route = Router();
const carsControllers = new CarsControllers();

route.get("/getAllCars", carsControllers.getAllCars);
route.get(
  "/getCarById/:id",
  verifyCarsIdmiddleware,
  carsControllers.getCarById
);
route.post("/createCar", verifyDataCarsMiddleware, carsControllers.createCar);
route.put(
  "/updateCar/:id",
  verifyDataCarsMiddleware,
  carsControllers.updateCar
);
route.delete(
  "/deleteCar/:id",
  verifyCarsIdmiddleware,
  carsControllers.deleteCar
);

export default route;
