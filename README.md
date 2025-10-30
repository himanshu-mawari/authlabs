
# AuthLabs 🔐

A simple learning project for implementing **JWT-based authentication** using **Node.js**, **Express**, and **MongoDB**.  
Built to understand and practice authentication workflows — can be extended or reused in future projects.

---

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express** - Web framework 
- **MongoDB + Mongoose** - Database & ODM 
- **dotenv** - Enviroment configuration
- **Nodemon** (dev) - Auto-restart sever on changes
- **bcrypt** – Securely hashing and comparing passwords  
- **jsonwebtoken (JWT)** – Create and verify JSON Web Tokens for authentication  
- **cookie-parser** – Middleware to handle cookies in Express  

---
## ⚙️ Installation & Setup

1. **Clone the repo**
   ```bash
    git clone https://github.com/<your-username>/authlabs.git
    cd authlabs
2. **Create a .env file**
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
3. **Install dependencies**
   ```bash
   npm install
4. **Run the server**
   ```bash
   npm run dev

Server will start at: 👉 http://localhost:3000

---

## 🧑‍💻 Notes
This project is for learning purposes — experimenting with authentication logic, JWT handling, and cookies.
It can be used later as a boilerplate for building full-featured authentication systems.