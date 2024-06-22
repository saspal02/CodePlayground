const convertToCelsius = function(farenheit) {
  const conversion = (farenheit - 32) * 5/9;
  const roundedConversion = parseFloat(conversion.toFixed(1));
  return roundedConversion;

};

const convertToFahrenheit = function(celsius) {
  const conversion = (celsius * 9/5) + 32;
  const roundedConversion = parseFloat(conversion.toFixed(1)); 
  return roundedConversion;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
