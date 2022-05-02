const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("in the login route");
});
module.exports = routes;
