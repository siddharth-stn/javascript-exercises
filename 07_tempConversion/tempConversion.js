const ftoc = function(tempInFahrenheit) {
  let tempInCelsius = 0;
  tempInCelsius = Number(((tempInFahrenheit - 32) * (5/9)).toFixed(1));
  return tempInCelsius;
};

const ctof = function(tempInCelsius) {
  let tempInFahrenheit = 0;
  tempInFahrenheit = Number((tempInCelsius * (9/5) + 32).toFixed(1));
  return tempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
