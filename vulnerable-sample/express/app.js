const express = require("express");

const app = express();

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const response =
    req.query && req.query.hasOwnProperty("name")
      ? `<html><body>Hello</body><input value="${req.query.name}"/></html>`
      : `<html><body>Hello</body><input /></html>`;

  res.send(response);
});

app.listen(3000, () => {
  console.log("Server running...");
});
