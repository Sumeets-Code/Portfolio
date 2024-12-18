import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req ,res) => {
    res.render("index");
})

app.get("/hobbies", (req ,res) => {
    res.render("hobbies");
})

app.get("/contact", (req ,res) => {
    res.render("contact");
})

app.listen (port, () => {
    console.log(`Server is running on port ${port}`);
})
