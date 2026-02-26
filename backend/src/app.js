import express from "express";
import connectDB from "./config/database.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser"
import cors from "cors";

const app = express();
const ports = 2000;

// Middleware parse to json
app.use(cors({origin:"http://localhost:5173" , credentials:true}))
app.use(express.json());
app.use(cookieParser())

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




































