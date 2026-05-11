const express = require("express");
const router = express.Router();

const { convertUnit } = require("../controllers/quantityController");

router.post("/convert", convertUnit);

module.exports = router;