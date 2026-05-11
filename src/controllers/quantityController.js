const { convertQuantity } = require("../services/conversionService");

const convertUnit = (req, res) => {
    try {
        if (!req.body) {
            throw new Error("Request body is missing");
        }
        const { value, unit } = req.body;
        const { targetUnit } = req.query;

        const result = convertQuantity(value, unit, targetUnit);

        res.json({
            originalValue: value,
            originalUnit: unit,
            convertedValue: result,
            targetUnit: targetUnit
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

module.exports = {
    convertUnit
};