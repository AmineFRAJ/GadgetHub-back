const express = require("express");


const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://gadget-hub-client-git-master-aminefrajs-projects.vercel.app/'); // Allow frontend origin
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true'); // Allow cookies if needed
  next();
});

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
