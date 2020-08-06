import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost" }));

app.get("/", (request, response) => {
  return response.json({ message: "Ola mmundo!" });
});

app.listen(process.env.PORT || 3333, () => {
  console.log("SERVER IS RUNNING IN PORT:" + 3333);
});
