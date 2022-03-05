const unnamed = require("unnamed-js");

const { GET } = unnamed({ port: 3000 });

GET("/", (req, res) => {
  const response =
    req.query && req.query.hasOwnProperty("name")
      ? `<html><body>Hello</body><input value="${req.query.name}"/></html>`
      : `<html><body>Hello</body><input /></html>`;

  res.send(response);
});
