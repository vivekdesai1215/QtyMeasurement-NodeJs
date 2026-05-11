const units = require("../constants/units");
const { getMeasurementType } = require("../utils/unitHelper");

function toBase(value, unit) {
    return value * units[unit].factor;
}

function fromBase(baseValue, unit) {
    return baseValue / units[unit].factor;
}

function validateSameType(unit1, unit2) {
    const type1 = getMeasurementType(unit1);
    const type2 = getMeasurementType(unit2);

    if (type1 !== type2) {
        throw new Error("Cannot operate on different measurement types");
    }

    return type1;
}

function add(thisQty, thatQty, resultUnit = null) {

    validateSameType(thisQty.unit, thatQty.unit);

    const base1 = toBase(thisQty.value, thisQty.unit);
    const base2 = toBase(thatQty.value, thatQty.unit);

    const sum = base1 + base2;

    const finalUnit = resultUnit || thisQty.unit;

    return {
        value: fromBase(sum, finalUnit),
        unit: finalUnit
    };
}

function subtract(thisQty, thatQty, resultUnit = null) {

    validateSameType(thisQty.unit, thatQty.unit);

    const base1 = toBase(thisQty.value, thisQty.unit);
    const base2 = toBase(thatQty.value, thatQty.unit);

    const diff = base1 - base2;

    const finalUnit = resultUnit || thisQty.unit;

    return {
        value: fromBase(diff, finalUnit),
        unit: finalUnit
    };
}

function multiply(thisQty, thatQty, resultUnit = null) {

    validateSameType(thisQty.unit, thatQty.unit);

    const base1 = toBase(thisQty.value, thisQty.unit);
    const base2 = toBase(thatQty.value, thatQty.unit);

    const result = base1 * base2;

    const finalUnit = resultUnit || thisQty.unit;

    return {
        value: fromBase(result, finalUnit),
        unit: finalUnit
    };
}

function divide(thisQty, thatQty, resultUnit = null) {

    validateSameType(thisQty.unit, thatQty.unit);

    const base1 = toBase(thisQty.value, thisQty.unit);
    const base2 = toBase(thatQty.value, thatQty.unit);

    if (base2 === 0) throw new Error("Cannot divide by zero");

    const result = base1 / base2;

    const finalUnit = resultUnit || thisQty.unit;

    return {
        value: fromBase(result, finalUnit),
        unit: finalUnit
    };
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
};