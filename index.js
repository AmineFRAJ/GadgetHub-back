const express = require("express");


const app = express();

const cors = require("cors");

app.use(cors({
  origin: "https://gadget-hub-client-dldab9jg3-aminefrajs-projects.vercel.app", // front-end URL
  credentials: true
}));

app.use(express.json());

require("dotenv").config();

const PORT = process.env.PORT || 7000;

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`⚡⚡⚡ Server is running on http://127.0.0.1:${PORT}`);
});

const connectDB = require("./config/connectDB");

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});
// Product routes
app.use("/api/products", require("./routes/productRoutes"));

//auth routes
app.use("/api/auth", require("./routes/authRoutes"));

// User routes
app.use("/api/users", require("./routes/userRoutes"));
