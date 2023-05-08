const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "public"))); //! static folder declaration

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())

const mainRouter = require("./routes/main");
app.use("/", mainRouter);

const plRouter = require("./routes/pl");
app.use("/pl", plRouter);

app.listen(3000, () => {
    console.log(`App is working I guess`);
})