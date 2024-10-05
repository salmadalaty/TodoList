const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb+srv://lalo:lalo123@todolist.uxetz.mongodb.net/?retryWrites=true&w=majority&appName=todolist")
    .then(() => {
        console.log("ok");
    })



// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));