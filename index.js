import express from "express";
import bodyParser from "body-parser";
import { userRoutes } from "./routes/users.js";
const app = express();
const PORT = 4000;
app.use(bodyParser.json());
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("HOME");
});
app.listen(PORT, () => {
  console.log(`Server running on PORT :  ${PORT}`);
});
