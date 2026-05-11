const { compareQuantity } = require("../services/comparisonService");
const { saveHistory } = require("../services/historyService");
const { getMeasurementType } = require("../utils/unitHelper");


const compare = async (req, res) => {
    try {
        const { thisQuantity, thatQuantity } = req.body;

        const result = compareQuantity(thisQuantity, thatQuantity);

        await saveHistory({
        operationType: "COMPARE",
        measurementType: getMeasurementType(thisQuantity.unit),

        input1Value: thisQuantity.value,
        input1Unit: thisQuantity.unit,

        input2Value: thatQuantity.value,
        input2Unit: thatQuantity.unit,

        comparisonResult: result
        });
        res.json({
            comparisonResult: result
        });

    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

module.exports = {
    compare
};