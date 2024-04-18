const express = require ('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    // res.send("This is a Home page");
    res.write("This is WRITE page res");
    res.send();// to close the connection
});

app.get("/about", (req, res) => {
    res.send("This is About Page");
});

app.get("/contect", (req, res) => {
    res.status(200).send("This is Contect Page");
});

app.get("/temp", (req, res) => {
    // res.send([
    // {
    //     id: 1,
    //     name: "Abhishek",
    // },
    // {
    //     id: 1,
    //     name: "Abhishek",
    // },
    // {
    //     id: 1,
    //     name: "Abhishek",
    // }
    // ]);
    res.json([
        {
            id: 1,
            name: "Abhishek",
        },
        {
            id: 1,
            name: "Abhishek",
        },
        {
            id: 1,
            name: "Abhishek",
        },
        ]);
});

app.listen(PORT , () => {
    console.log(`App is listening at ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});