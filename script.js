var isDate = function (input) {
  if (input === null || input === undefined || input === '') return false;
  const date = new Date(input);
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));