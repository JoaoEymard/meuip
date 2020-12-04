const routes = require("express").Router();
var requestIp = require("request-ip");

const { httpVerify, generateToken } = require("../../helpers/jwt");

// Exemplo de rota livre de autenticação
routes.get("/meuip", (req, res) => {
  return res.json({
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
    ip: requestIp.getClientIp(req),
  });
});

module.exports = routes;
