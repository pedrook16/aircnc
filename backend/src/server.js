const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 3333;

const routes = require("./Routes/routes");

const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => console.log(`Port ${port}`));
