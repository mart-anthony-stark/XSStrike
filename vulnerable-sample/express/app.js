const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get("/", (req, res) => {
//   const response =
//     req.query && req.query.hasOwnProperty("name")
//       ? `<html><body>Hello</body><input value="${req.query.name}"/></html>`
//       : `<html><body>Hello</body><input /></html>`;

//   res.send(response);
// });

app.get("/", (req, res) => {
  res.render("register", { firstname: "" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.render("register", { ...req.body });
});

app.listen(3000, () => {
  console.log("Server running...");
});
