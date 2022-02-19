
const path = require("path");
const express = require("express");

const functions = require("./functions")
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine","hbs");
app.use("/assets", express.static(path.join(__dirname, "./assets")));
app.use("/js", express.static(path.join(__dirname, "./js")));

app.get("/", function (req, res) {
    res.render("index", {
        pageTitle: "Lekcja ALK 19.02.2022",
        x: 4,
        y: functions.add(1,2),
    });
})
app.get("/about", function (req, res) {
    res.render("about");
})
app.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`);
});

