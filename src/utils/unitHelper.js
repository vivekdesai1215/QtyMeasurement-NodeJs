const units = require("../constants/units");

function isValidUnit(unit) {
    return units.hasOwnProperty(unit);
}

function getMeasurementType(unit) {
    console.log("RAW UNIT:", `[${unit}]`);
    console.log("LOOKUP RESULT:", units[unit]);

    if (!isValidUnit(unit)) {
        throw new Error("Invalid unit");
    }

    return units[unit].type;
}

module.exports = {
    isValidUnit,
    getMeasurementType
};