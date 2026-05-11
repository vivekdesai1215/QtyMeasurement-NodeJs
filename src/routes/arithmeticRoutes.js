const express = require("express");
const router = express.Router();
const controller = require("../controllers/arithmeticController");

router.post("/add", controller.add);
router.post("/subtract", controller.subtract);
router.post("/multiply", controller.multiply);
router.post("/divide", controller.divide);

module.exports = router;