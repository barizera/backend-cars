import express from "express";
import cors from "cors";
import route from "./routes/cars.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("", (req, res) => {
  return res.send("Olá Dev");
});

app.use("/carros", route);

export default app;
