const express = require("express");
const router = express.Router();

const historyController = require("../controllers/historyController");

router.get("/history", historyController.fetchAllHistory);

router.get(
    "/history/measurementType",
    historyController.fetchByMeasurementType
);

router.get(
    "/history/operationType",
    historyController.fetchByOperationType
);

module.exports = router;