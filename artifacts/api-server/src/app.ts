import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "API is working" });
});

export default app;
