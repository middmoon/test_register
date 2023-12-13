const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.get("", (req, res) => {
  res.send({
    mess: "helloo",
  });
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log(`app listen at 3000 port`);
});
