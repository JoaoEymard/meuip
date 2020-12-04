const routes = require("express").Router();
var requestIp = require("request-ip");

const { httpVerify, generateToken } = require("../../helpers/jwt");

// Exemplo de rota livre de autenticação
routes.get("/meuip", (req, res) => {
  return res.json(requestIp.getClientIp(req));
});

module.exports = routes;
