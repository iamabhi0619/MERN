
const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000

//type of path relative absolute
// console.log(__dirname);
//build in middleware
// express.use(express.static(staticPath))

//console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})