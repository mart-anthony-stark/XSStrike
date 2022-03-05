const unnamed = require("unnamed-js");

const server = unnamed({ port: 3000 });

server.GET("/", (req, res) => {
  const response =
    req.query && req.query.hasOwnProperty("name")
      ? `<html><body>Hello</body><input value="${req.query.name}"/></html>`
      : `<html><body>Hello</body><input /></html>`;

  res.send(response);
});
