import express from "express";

const port = 3000
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World! </h1>")
})

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>")
})

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})
