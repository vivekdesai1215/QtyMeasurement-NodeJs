const { convertQuantity } = require("../services/conversionService");
const { saveHistory } = require("../services/historyService");
const { getMeasurementType } = require("../utils/unitHelper");

const convertUnit = async (req, res) => {
    try {
        if (!req.body) {
            throw new Error("Request body is missing");
        }
        let { value, unit } = req.body;
        let { targetUnit } = req.query;
        unit = unit.trim().toLowerCase();
        targetUnit = targetUnit.trim().toLowerCase();   
        const result = convertQuantity(value, unit, targetUnit);

        await saveHistory({
            operationType: "CONVERT",
            measurementType: getMeasurementType(unit),

            input1Value: value,
            input1Unit: unit,

            resultValue: result,
            resultUnit: targetUnit
        });

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