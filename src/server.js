import app from "./app.js";
import { connectToDatabase } from "./database/index.js";
const port = 3001;

app.listen(port, () => {
  connectToDatabase();
  console.log(`Servidor rodando na porta http://localhost:${port}`);
});
