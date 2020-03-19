const express = require ("express");

const app = express.Router();

const comments = [];

app.post("/", (req, res) => {
  comments.push(req.body);
  res.json(200);
});

app.get("/", (req, res) => {
  res.json(comments);
});

module.exports = app;
