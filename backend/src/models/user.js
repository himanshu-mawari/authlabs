import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [6, "Username must be at least 6 characters"],
        maxLength: [20, "Username must be at most 20 characters"],
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate(value) {
            const isEmail = validator.isEmail(value);
            if (!isEmail) {
                throw new Error("Invalid email");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password must be at least 8 characters"],
        validate(value) {
            const isStrongPassword = validator.isStrongPassword(value);
            if (!isStrongPassword) {
                throw new Error("Make a strong password");
            }
        }
    },
    profilePicture: {
        type: String,
        default: "https://cdn.vectorstock.com/i/1000v/96/77/blank-grey-scale-profile-picture-placeholder-vector-51589677.avif",
        validate(value) {
            const isValidUrl = validator.isURL(value);
            if (!isValidUrl) {
                throw new Error("Invalid profile picture url");
            }
        }
    }
}, { timestamps: true });

userSchema.methods.validatePassword = async function(userPassword){
    const user = this;
    const hashPassword = user.password;
    const userInputPassword = userPassword;
   
    const verifyPassword = await bcrypt.compare(userInputPassword , hashPassword);
    return verifyPassword;
}

userSchema.methods.getJWT = async function(){
    const userId = this._id
    const token = await jwt.sign({ _id: userId }, process.env.JWT_SECRET , { expiresIn: "3d" });
    return token
}


const User = mongoose.model("User", userSchema);



export default User;