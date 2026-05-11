const db = require("./db");

async function testDB() {
    try {
        const [rows] = await db.query("SELECT 1");
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
    }
}

module.exports = testDB;