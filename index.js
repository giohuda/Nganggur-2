import express from "express";
import bodyParser from "body-parser";
import fs from "fs"

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("login.ejs");
})
app.get("/about", (req, res) => {
    res.render("about.ejs");
})
app.get("/member", (req, res) => {
    res.render("member.ejs");
})
app.get("/gallery", (req, res) => {
    res.render("gallery.ejs");
})
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
})

app.post("/dashboard", (req, res) => {
    const username = req.body["username"];
    const password = req.body["password"];
    if (username == "user" && password == "user"){
        res.render("dashboard.ejs");
    } else {
        res.render("login.ejs");
    }
})

app.post("/contact/sendmassage", (req, res) => {
    const email = req.body["email"];
    const message = req.body["message"];

    const data = `Email: ${email}, Message: ${message}`;

    fs.writeFile('message.txt', data, (err) => {
        if (err) throw err;
    })
    res.render("send.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})