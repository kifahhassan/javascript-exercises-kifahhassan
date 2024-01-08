const convertToCelsius = function(temp) {
  let toCelsius = (temp - 32) * 0.55555556;

  // if (toCelsius === 0.0) {
  //   return 0;
  // }

  return parseFloat(toCelsius.toFixed(1));


};

const convertToFahrenheit = function(temp) {
  let toFarenheit = temp * 1.8 + 32;

  // if (toFarenheit === 0.0) {
  //   return 0
  // }

  return parseFloat(toFarenheit.toFixed(1));
};

console.log("To celsius: " + convertToCelsius(80));

console.log("to farenheit: " + convertToFahrenheit(82.22));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
