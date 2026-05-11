const historyService = require("../services/historyService");

const fetchAllHistory = async (req, res) => {
    try {
        const result = await historyService.getAllHistory();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fetchByMeasurementType = async (req, res) => {
    try {
        const { measurementType } = req.query;

        const result = await historyService.getHistoryByMeasurementType(
            measurementType
        );

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const fetchByOperationType = async (req, res) => {
    try {
        const { operationType } = req.query;

        const result = await historyService.getHistoryByOperationType(
            operationType
        );

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    fetchAllHistory,
    fetchByMeasurementType,
    fetchByOperationType
};