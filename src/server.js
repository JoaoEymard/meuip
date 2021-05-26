/**
 * Module dependencies.
 */

require("dotenv").config();
const express = require("express");
const http = require("http");
const logger = require("morgan");

/**
 * Iniciando o express
 */

const app = express();

/**
 * Configurações gerais
 */

app.set("port", process.env.PORT || "3000");
app.use(logger("dev")); // Gerar log das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Iniciando rotas
 */

app.use("/", require("./routes"));

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(process.env.PORT || "3000");
server.on("error", (err) => {
  console.error("Error capturado", err);
  process.exit(1);
});
server.on("listening", () => {
  console.log("Servidor rodando em: " + (process.env.PORT || "3000"));
});
