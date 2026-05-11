const express = require("express");
const db = require("./config/db");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT 1 + 1 AS result");
        res.json(rows);
    } catch (err) {
        console.log(err);
        res.status(500).send("DB error");
    }
});

module.exports = app;