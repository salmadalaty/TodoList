const router = require("express").Router()
const todo = require("../models/todo");

// routes will be here....
router.get("/", async (req, res) => {
    const allTodo = await todo.find();
    res.render("index", { todo: allTodo })
})


module.exports = router;
