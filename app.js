import { config } from "dotenv";
config();

import e from "express";

const app = e();

// server status check route
app.get("/ping", (req, res) => {
  res.status(200).send("pong");
});

export default app;
