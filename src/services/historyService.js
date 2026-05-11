const db = require("../config/db");

async function saveHistory(data) {
    const query = `
        INSERT INTO quantity_history (
            operation_type,
            measurement_type,
            input1_value,
            input1_unit,
            input2_value,
            input2_unit,
            result_value,
            result_unit,
            comparison_result
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(query, [
        data.operationType,
        data.measurementType,
        data.input1Value,
        data.input1Unit,
        data.input2Value || null,
        data.input2Unit || null,
        data.resultValue || null,
        data.resultUnit || null,
        data.comparisonResult || null
    ]);
}

module.exports = {
    saveHistory
};