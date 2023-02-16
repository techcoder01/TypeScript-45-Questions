"use strict";
exports.__esModule = true;
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function q38() {
    function describeCity(city, country) {
        if (country === void 0) { country = 'Unknown'; }
        console.log("".concat(city, " is in ").concat(country, "."));
    }
    describeCity('Karachi', 'Pakistan');
    describeCity('Lahore', 'Pakistan');
    describeCity('New York', 'USA');
    describeCity('Paris');
}
exports["default"] = q38;
q38();
