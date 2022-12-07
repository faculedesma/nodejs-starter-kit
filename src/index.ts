import express from "express";
import exampleRouter from "@routes/example";

const app = express();
app.use(express.json());

const PORT = 8080;

app.use("/api/example", exampleRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
