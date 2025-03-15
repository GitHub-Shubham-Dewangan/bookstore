const router = required("express").Router();
const User = require("../models/user");

//sign-up

router.post("/sign-up", async (req, res) => {
    try {
        const {username,email,password,address} = req.body;

        //check username length is more than 4
        if(username.length < 4){
            return res.status(400).json({message:"Username length should be greater than 3"});
        }

        //check if username already exists

    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;