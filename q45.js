"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function q45() {
    function createCar(manufacturer, model, options) {
        var car = __assign({ manufacturer: manufacturer, model: model }, options);
        return car;
    }
    var myCar = createCar('Toyota', 'Camry', { color: 'silver', sunroof: true });
    console.log(myCar);
}
exports["default"] = q45;
q45();
