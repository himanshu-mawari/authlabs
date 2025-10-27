import express from "express";
import { validateProfileInput } from "../helpers/validation.js"
import userAuth from "../middlewares/auth.js";
import User from "../models/user.js"

const userRouter = express.Router();

userRouter.get("/profile/view" , userAuth , async (req , res) => {
    try {
        const loggedinuser = req.user;
        res.json({
            message : "User profile data",
            data : loggedinuser
        })
    } catch(err){
        res.status(400).json({
            message : "Error fetch profile : " + err.message
        })
    }
});

userRouter.patch("/profile/edit" , userAuth , async (req , res) => {
    try{
        validateProfileInput(req);

        const loggedinUser = req.user;
    
        Object.keys(req.body).forEach(key => (loggedinUser[key] = req.body[key]));

        await loggedinUser.save()

        res.json({
            message : "User updated successfully",
            data : loggedinUser
        })

    } catch(err){
        res.status(400).json({
            message : "Error updating profile : " + err.message
        })
    }
})

userRouter.delete("/profile/delete" , userAuth , async (req , res) => {
    try{
        const loggedinuser = req.user;
        await User.findByIdAndDelete(loggedinuser);
        res.clearCookie("token")
        res.json({
            message: "Account deleted successfully"
        })
    } catch(err){
        res.status(400).json({
            message : "Error delete profile" + err.message
        })
    }

})

export default userRouter;