const express = require("express");
const cors = require("cors");
require("dotenv").config();

const testDB = require("./config/testConnection");
const { getMeasurementType } = require("./utils/unitHelper");

const app = express();

app.use(cors());
app.use(express.json());

// DB connection test
testDB();

// Home route
app.get("/", (req, res) => {
    res.send("Quantity Measurement API Running");
});

// Test unit route
app.get("/test-unit/:unit", (req, res) => {
    try {
        const unit = req.params.unit;

        const type = getMeasurementType(unit);

        res.json({
            unit,
            measurementType: type
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});