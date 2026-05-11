const express = require("express");
const router = express.Router();

const { compare } = require("../controllers/comparisonController");

router.post("/compare", compare);

module.exports = router;