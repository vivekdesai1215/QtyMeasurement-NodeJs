const express = require("express");
const cors = require("cors");
require("dotenv").config();

const testDB = require("./config/testConnection");

// routes
const quantityRoutes = require("./routes/quantityRoutes");
const arithmeticRoutes = require("./routes/arithmeticRoutes");
const comparisonRoutes = require("./routes/comparisonRoutes");
const historyRoutes = require("./routes/historyRoutes");
const authRoutes = require("./routes/authRoutes");

// middleware
const authenticate = require("./middlewares/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// DB test
testDB();

app.get("/", (req, res) => {
    res.send("Quantity Measurement API Running");
});


// PUBLIC ROUTES
app.use("/", authRoutes);


// PROTECTED ROUTES
app.use("/", authenticate, quantityRoutes);
app.use("/", authenticate, arithmeticRoutes);
app.use("/", authenticate, comparisonRoutes);
app.use("/", authenticate, historyRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});