import jwt from "jsonwebtoken"
import User from "../models/user.js"

const userAuth = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if(!token){
            throw new Error("No token provided");
        }
        const decodedToken = await jwt.verify(token,  process.env.JWT_SECRET);
        const { _id } = decodedToken;

        const user = await User.findById(_id);
        if(!user){
            throw new Error("User not found")
        }

        req.user = user;

        next();
    } catch (err) {
        res.status(404).json({
            message: "Error authentication : " + err.message
        })
    }
}

export default userAuth
