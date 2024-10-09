const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});

app.engine("handlebars", hbs.engine);
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

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "Este artigo vai te ajudar a aprender Node.js...",
      comments: 70,
    },
    {
      title: "Aprender Php",
      category: "Php",
      body: "Este artigo vai te ajudar a aprender Php...",
      comments: 70,
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "Este artigo vai te ajudar a aprender Python...",
      comments: 70,
    },
  ];

  res.render("blog", { posts });
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
