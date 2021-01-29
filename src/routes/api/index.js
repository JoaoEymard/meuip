const routes = require("express").Router();
var requestIp = require("request-ip");
var whois = require("whois-json");

const { httpVerify, generateToken } = require("../../helpers/jwt");

// Exemplo de rota livre de autenticação
routes.get("/meuip", (req, res) => {
  return res.json({
    ip: requestIp.getClientIp(req),
  });
});

routes.get("/v2/meuip", async (req, res) => {
  const client_ip = requestIp.getClientIp(req);
  const details = await whois(client_ip);

  return res.json({
    ip: client_ip,
    ...details,
  });
});

module.exports = routes;
