import express from "express";
import path from "path"
const PORT = 8080;
const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"))

app.use(express.static("public"))

app.get("/", (request, response) => {
   response.render("index")
})

app.listen(PORT, () => {
   console.log(`SERVER IS RUNNING AT http://localhost:${PORT}`);
});