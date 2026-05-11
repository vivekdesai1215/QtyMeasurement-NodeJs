const service = require("../services/arithmeticService");
const { saveHistory } = require("../services/historyService");
const { getMeasurementType } = require("../utils/unitHelper");


function handleOperation(operation) {
    return async (req, res) => {
        try {
            const result = service[operation](
                req.body.thisQuantity,
                req.body.thatQuantity,
                req.query.resultUnit
            );

            await saveHistory({
            operationType: "ADD",
            measurementType: getMeasurementType(req.body.thisQuantity.unit),

            input1Value: req.body.thisQuantity.value,
            input1Unit: req.body.thisQuantity.unit,

            input2Value: req.body.thatQuantity.value,
            input2Unit: req.body.thatQuantity.unit,

            resultValue: result.value,
            resultUnit: result.unit
        });

            res.json(result);
        } catch (err) {
            res.status(400).json({
                error: err.message
            });
        }
    };
}

exports.add = handleOperation("add");
exports.subtract = handleOperation("subtract");
exports.multiply = handleOperation("multiply");
exports.divide = handleOperation("divide");