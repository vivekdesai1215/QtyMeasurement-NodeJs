const units = require("../constants/units");
const { getMeasurementType } = require("../utils/unitHelper");

function toBase(value, unit) {
    return value * units[unit].factor;
}

function compareQuantity(thisQty, thatQty) {
    const type1 = getMeasurementType(thisQty.unit);
    const type2 = getMeasurementType(thatQty.unit);

    if (type1 !== type2) {
        throw new Error("Cannot compare different measurement types");
    }

    // temperature special case later if needed
    if (type1 === "TEMPERATURE") {
        throw new Error("Temperature comparison not supported currently");
    }

    const base1 = toBase(thisQty.value, thisQty.unit);
    const base2 = toBase(thatQty.value, thatQty.unit);

    if (base1 > base2) {
        return "GREATER_THAN";
    }

    if (base1 < base2) {
        return "LESS_THAN";
    }

    return "EQUAL";
}

module.exports = {
    compareQuantity
};