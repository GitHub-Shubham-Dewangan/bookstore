const express = require("express");
const app = express()
require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");


//routes
app.use("/ap1/v1",user);
//creating Port
app.listen(process.env.PORT, () => {
    console.log(`Server Started at port ${process.env.PORT}`);
});