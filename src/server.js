import "dotenv/config";
import app from "./app.js";
import { connectToDatabase } from "./database/index.js";

const port = process.env.PORT || 3001;

app.listen(port, () => {
  connectToDatabase();
  if (!process.env.PORT) {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
  }
});
