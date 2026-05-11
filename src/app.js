const express = require("express");
const cors = require("cors");
require("dotenv").config();

const testDB = require("./config/testConnection");

const app = express();

app.use(cors());
app.use(express.json());

testDB();

app.get("/", (req, res) => {
    res.send("Quantity Measurement API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});