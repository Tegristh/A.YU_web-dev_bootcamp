import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = 3000
const today = new Date(Date.now());
let message = ''
// const test = 3

function createMessage(req, res, next) {
    // console.log(today.getDay())
    if ((today.getDay() === 0) || (today.getDay() === 6)){
        message = "It's the weekend, it's time to have fun!"
    } else {
        message = "It's a weekday, it's time to work hard!"
    }
    next()
}

app.use(createMessage)

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs",
    {h1: message})
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });