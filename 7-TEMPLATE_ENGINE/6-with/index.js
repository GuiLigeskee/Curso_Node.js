const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item c"];

  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 70,
  };

  res.render("blogpost", { post });
});

app.get("/", (req, res) => {
  const user = {
    name: "Guilherme",
    surname: "Ligeski Saldanha",
    age: 19,
  };

  const palavra = "teste";

  const auth = true;

  const approved = false;

  res.render("home", { user, palavra, auth, approved });
});

app.listen(3000, () => {
  console.log("App funcionando");
});
