import express from "express";
import connectDB from "./config/database.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js"
import cookiePaser from "cookie-parser"


const app = express();
const ports = 2000;

// Middleware parse to json
app.use(express.json());
app.use(cookiePaser())

// Routes
app.use("/api/auth" , authRouter);
app.use("/api/users" , userRouter);

connectDB().then(() => {
    console.log("Database connected successfully")
    app.listen(ports, () => {
        console.log("These server will listen at ports " + ports + " successfully!");
    })
}).catch(err => {
    console.log("Database connection failed", err.message);
});




































