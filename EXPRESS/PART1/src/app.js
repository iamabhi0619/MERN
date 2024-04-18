const express = require("express");
const app = express();

// app.get(route, callback)
//API
//get - read
//post - create
//put - update
//delete - delete

app.get("/", (req, res) => {
    res.send("Hello World From Express")
});

app.get("/about", (req, res) => {
    res.send("This is new page For About")
})

app.listen(8000, () => {
    console.log("Starting the port at 8000");
});