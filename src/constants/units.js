const MeasurementTypes = require("./measurementTypes");

const units = {
    // LENGTH
    meter: { type: MeasurementTypes.LENGTH, factor: 1.0 },
    centimeter: { type: MeasurementTypes.LENGTH, factor: 0.01 },
    millimeter: { type: MeasurementTypes.LENGTH, factor: 0.001 },
    inch: { type: MeasurementTypes.LENGTH, factor: 0.0254 },
    foot: { type: MeasurementTypes.LENGTH, factor: 0.3048 },
    yard: { type: MeasurementTypes.LENGTH, factor: 0.9144 },
    kilometer: { type: MeasurementTypes.LENGTH, factor: 1000.0 },
    mile: { type: MeasurementTypes.LENGTH, factor: 1609.34 },

    // WEIGHT
    kilogram: { type: MeasurementTypes.WEIGHT, factor: 1.0 },
    gram: { type: MeasurementTypes.WEIGHT, factor: 0.001 },
    milligram: { type: MeasurementTypes.WEIGHT, factor: 0.000001 },
    pound: { type: MeasurementTypes.WEIGHT, factor: 0.453592 },
    ounce: { type: MeasurementTypes.WEIGHT, factor: 0.0283495 },

    // VOLUME
    liter: { type: MeasurementTypes.VOLUME, factor: 1.0 },
    milliliter: { type: MeasurementTypes.VOLUME, factor: 0.001 },
    gallon: { type: MeasurementTypes.VOLUME, factor: 3.78541 },
    quart: { type: MeasurementTypes.VOLUME, factor: 0.946353 },
    pint: { type: MeasurementTypes.VOLUME, factor: 0.473176 },
    cup: { type: MeasurementTypes.VOLUME, factor: 0.24 },

    // TEMPERATURE
    celsius: { type: MeasurementTypes.TEMPERATURE },
    fahrenheit: { type: MeasurementTypes.TEMPERATURE },
    kelvin: { type: MeasurementTypes.TEMPERATURE }
};

module.exports = units;