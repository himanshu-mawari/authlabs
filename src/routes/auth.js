import express from "express";
import User from "../models/user.js";
import { validateSignupInput } from "../helpers/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const authRouter = express.Router();


authRouter.post("/signup", async (req, res) => {
    try {
        validateSignupInput(req);

        const { username, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashPassword,
        });

        await user.save();
        res.json({
            message: "You're in! Thanks for signing up—let's get started.",
            data: user
        });
    } catch (err) {
        res.status(400).json({
            message: "Error signing up : " + err.message
        })
    }
});

authRouter.post("/login", async (req, res) => {
    try {

        const { email: userEmail, password: userPassword } = req.body;

        const user = await User.findOne({ email: userEmail });
        if (!user) {
            throw new Error("Invalid credentials")
        }

        const doesPasswordMatch = await user.validatePassword(userPassword)
        if (!doesPasswordMatch) {
            throw new Error("Invalid credentials")
        } else {
            const token = await user.getJWT()
            res.cookie("token", token, { expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) });
            res.json({
                message: "Login successfully. Welcome back!"
            })
        }

    } catch (err) {
        res.status(400).json({
            message: "Error logging in :" + err.message
        })
    }
});

authRouter.post("/logout", async (req, res) => {
    try {
        res.clearCookie("token")
        res.json({
            message: "User logout successfully"
        })
    } catch (err) {
        res.status(400).json({
            message: "Error logging out : " + err.message
        })
    }
})

export default authRouter;  