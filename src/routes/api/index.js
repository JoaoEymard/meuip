const routes = require("express").Router();

const { httpVerify, generateToken } = require("../../helpers/jwt");

// Exemplo de rota livre de autenticação
routes.get("/meuip", (req, res) => {
  return res.json({
    url: req.url,
    baseUrl: req.baseUrl,
    originalUrl: req.originalUrl,
    hostname: req.hostname,
  });
});

module.exports = routes;
