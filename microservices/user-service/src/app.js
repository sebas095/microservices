const express = require("express");
const app = express();

const response = {
  data: [],
  service: "User Service",
  architecture: "Microservices"
};

const logger = message => console.log("[👱 User service]: " + message);

app.use((req, res, next) => {
  response.data = [];
  next();
});

app.get("/api/v2/users", (req, res) => {
  response.data.push("Carlos", "Pedro", "Lucas");
  logger("Get user data");
  return res.send(response);
});

module.exports = app;