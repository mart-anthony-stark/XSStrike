const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<html><body>Hello</body><input value="${req.query.name}"/></html>`);
});

app.listen(3000, () => {
  console.log("Server running...");
});
