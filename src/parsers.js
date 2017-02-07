/**
* Returns the integer represented by numberString, or 0 if it is negative or not a number
* @param  {string}  numberString  The string to be parsed, should represent a number
* @return {integer}               The positive integer represented by numberString, or 0
*/
export function parsePositiveInteger(numberString) {
  if (!numberString || numberString.length < 1) return null;
  const number = parseFloat(numberString);
  if (isNaN(number)) return 0; // Invalid strings become 0
  return Math.max(Math.round(number), 0); // Negative numbers become 0
}
