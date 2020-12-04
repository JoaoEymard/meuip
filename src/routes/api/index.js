const routes = require("express").Router();

const { httpVerify, generateToken } = require("../../helpers/jwt");

// Exemplo de rota livre de autenticação
routes.get("/meuip", (req, res) => {
  return res.json({
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    ip:
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress,
  });
});

module.exports = routes;
