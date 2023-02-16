"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
exports.__esModule = true;
// "Lahore, Pakistan"
function q39() {
    function cityCountry(city, country) {
        return city + ', ' + country;
    }
    console.log(cityCountry('Lahore', 'Pakistan'));
    console.log(cityCountry('Paris', 'France'));
    console.log(cityCountry('Tokyo', 'Japan'));
}
exports["default"] = q39;
q39();
