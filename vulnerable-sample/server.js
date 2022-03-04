const unnamed = require("unnamed-js");

const server = unnamed({ port: 3000 });

server.GET("/", (req, res) => {
  res.send(`<html><body>Hello</body><input value="${req.query.name}"/></html>`);
});
