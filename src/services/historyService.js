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

// fetch all history
async function getAllHistory() {
    const [rows] = await db.execute(
        `SELECT * FROM quantity_history ORDER BY created_at DESC`
    );
    return rows;
}

// filter by measurement type
async function getHistoryByMeasurementType(measurementType) {
    const [rows] = await db.execute(
        `SELECT * FROM quantity_history 
         WHERE measurement_type = ?
         ORDER BY created_at DESC`,
        [measurementType]
    );
    return rows;
}

// filter by operation type
async function getHistoryByOperationType(operationType) {
    const [rows] = await db.execute(
        `SELECT * FROM quantity_history 
         WHERE operation_type = ?
         ORDER BY created_at DESC`,
        [operationType]
    );
    return rows;
}

module.exports = {
    saveHistory,
    getAllHistory,
    getHistoryByMeasurementType,
    getHistoryByOperationType
};