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
        const existingUsername = await User.find({ username: username });
        if (existingUsername){
            return res.status(400).json({ message: "Username already exists"});
        }

        //check if email already exists
        const existingEmail = await User.find({ email: email });
        if (existingEmail){
            return res.status(400).json({ message: "Email already exists"});
        }

        //check password length.
        if ( password.length <=5 ){
            return res.status(400).json({ message : "Password's length should be greater than 5"});
        }

        const newUser = new User({
            username: username,
            email: email,
            password: password,
            address: address,
        });
            await newUser.save();
            return res.status(200).json({ message: "SignUp Successfully"});

    } catch (error) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;