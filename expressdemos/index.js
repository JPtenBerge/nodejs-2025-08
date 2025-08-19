const express = require("express");
const app = express();
const port = 3005;

app.set("view engine", "pug");

// app.use();

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/product", (req, res) => {
  res.json({ description: "Haarborstel", price: 3.5 });
});
app.post("/product", (req, res) => {});

app.listen(
  port,
  () => {
    console.log(`Example app listening on port ${port}`);
  },
  (err) => console.error("oh nee!", err)
);
