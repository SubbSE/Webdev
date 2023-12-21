document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');

  function appendToDisplay(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }

  // Attach functions to the global object to make them accessible in the HTML
  window.appendToDisplay = appendToDisplay;
  window.clearDisplay = clearDisplay;
  window.calculate = calculate;
});
