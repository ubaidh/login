const express = require("express");
const dotenv = require("dotenv").config();
const {Intercept} = require("./middlewares/interseptor");
const login = require("./routes/login");
const app = express();
app.use('/login', login);
app.use(Intercept); 

app.use(
  express.json({ limit: "50mb", extended: true, type: "application/json" })
);
app.get("/", (req, res) => res.send("App is working"));
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
