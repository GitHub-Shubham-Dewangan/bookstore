const express = require("express");
const app = express()
require("dotenv").config();
require("./conn/conn");
const User = require("./routes/user");

app.use(express.json());
//routes
app.use("/api/v1", User);
//creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
});