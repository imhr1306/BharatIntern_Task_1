let results = document.getElementById("converted-value");

to.onchange = () => {
  results.innerHTML = "";
  results.style.color = "black";

  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let input = parseInt(document.getElementById("input").value, 10);

  let fromValue = from.value;
  let toValue = to.value;

  // Checking if both are same
  if (fromValue === toValue) {
    results.style.color = "red";
    results.innerHTML = "CONVERSION UNITS SHOULD BE DIFFERENT!";
  }

  // Checking the input and passing it to appropriate functions
  if (fromValue === "Celsius" && toValue === "Kelvin") {
    celsiusToKelvin(input);
  }

  if (fromValue === "Celsius" && toValue === "Fahrenheit") {
    celsiusToFahrenheit(input);
  }

  if (fromValue === "Fahrenheit" && toValue === "Kelvin") {
    fahrenheitToKelvin(input);
  }

  if (fromValue === "Fahrenheit" && toValue === "Celsius") {
    fahrenheitToCelsius(input);
  }

  if (fromValue === "Kelvin" && toValue === "Fahrenheit") {
    KelvinToFahrenheit(input);
  }

  if (fromValue === "Kelvin" && toValue === "Celsius") {
    KelvinToCelsius(input);
  }
};

// Conversion of input values

const celsiusToKelvin = (input) => {
  results.innerHTML = `The converted value is ${(input + 273.15).toFixed(
    2
)}`;
};

const celsiusToFahrenheit = (input) => {
  results.innerHTML = `The converted value is ${(
    input * (9 / 5) +
    32
  ).toFixed(2)}`;
};
const fahrenheitToKelvin = (input) => {
  results.innerHTML = `The converted value is ${(
    (input + 459.67) *
    (5 / 9)
  ).toFixed(2)}`;
};

const fahrenheitToCelsius = (input) => {
  results.innerHTML = `The converted value is ${(
    (input - 32) *
    (5 / 9)
  ).toFixed(2)}`;
};

const KelvinToFahrenheit = (input) => {
  results.innerHTML = `The converted value is ${(
    input * 1.8 -
    459.67
  ).toFixed(2)}`;
};

const KelvinToCelsius = (input) => {
  results.innerHTML = `The converted value is ${(input - 273.15).toFixed(
    2
  )}`;
};
