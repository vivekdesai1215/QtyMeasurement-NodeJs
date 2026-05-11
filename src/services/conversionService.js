const units = require("../constants/units");
const { getMeasurementType } = require("../utils/unitHelper");

function convertTemperature(value, fromUnit, toUnit) {
    
    if (fromUnit === toUnit) return value;

    // Celsius conversions
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
        return (value * 9/5) + 32;
    }

    if (fromUnit === "celsius" && toUnit === "kelvin") {
        return value + 273.15;
    }

    // Fahrenheit conversions
    if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        return (value - 32) * 5/9;
    }

    if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
        return ((value - 32) * 5/9) + 273.15;
    }

    // Kelvin conversions
    if (fromUnit === "kelvin" && toUnit === "celsius") {
        return value - 273.15;
    }

    if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
        return ((value - 273.15) * 9/5) + 32;
    }
}

function convertQuantity(value, fromUnit, toUnit) {

    if (!units[fromUnit] || !units[toUnit]) {
        throw new Error("Invalid unit");
    }
    console.log("From unit in service :  ",fromUnit)
     console.log("To unit in service :  ",toUnit)
    const fromType = getMeasurementType(fromUnit);
    const toType = getMeasurementType(toUnit);
    console.log("From Type : ",fromType)
    console.log("To Type: ",toType)
    if (fromType !== toType) {
        throw new Error("Cannot convert between different measurement types");
    }

    if (fromType === "TEMPERATURE") {
        return convertTemperature(value, fromUnit, toUnit);
    }

    const baseValue = value * units[fromUnit].factor;
    const convertedValue = baseValue / units[toUnit].factor;

    return convertedValue;
}

module.exports = {
    convertQuantity
};