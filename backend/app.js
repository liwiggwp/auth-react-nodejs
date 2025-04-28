const express = require("express");
const authRoutes = require("./src/routes/auth");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Сервер запущен на портe ${PORT}`);
});
