import express from "express";
import { v4 as uuidv4 } from "uuid";
export const userRoutes = express.Router();
let users = [];
userRoutes.get("/", (req, res) => {
  res.send(users);
});
// get single user
userRoutes.get("/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  res.send(user ? user : "401");
});
userRoutes.post("/", (req, res) => {
  users.push({ ...req.body, id: uuidv4() });
  res.send(`${req.body.firstName} added to database`);
});
