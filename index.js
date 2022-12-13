const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();

app.set("view engine", "ejs");
app.use(ejsLayouts);

app.get("/", (req, res) => {
  const profile = [
    { nama: "Frans", email: "frans@gmail.com" },
    { nama: "Ferdinand", email: "ferdinand@gmail.com" },
  ];
  res.render("home", { layout: "layouts/main", profile, title: "home" });
});

app.get("/about", (req, res) => {
  res.render("about", { layout: "layouts/main", title: "about" });
});

app.listen(3000, () => {
  console.log("Server running on localhost 3000");
});
