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
/**
* Returns the float represented by numberString, or 0 if it is negative or not a number
* @param  {string}  numberString  The string to be parsed, should represent a number
* @return {integer}               The positive float represented by numberString, or 0
*/
export function parsePositiveFloat(numberString) {
  if (!numberString || numberString.length < 1) return null;
  const number = parseFloat(numberString);
  if (isNaN(number) || number < 0) return 0; // Invalid strings or negatives become 0
  return number;
}
/**
* Returns the Date object represented by dateString, dateString should be in the
* format month/year, where month is 0-12 and year is 0-9999. If year is not specified
* in full assumed 21st century
* @param  {string}  dateString  The string to be parsed, as per description
* @return {Date}  js Date Object, with day set to last day of the month
*/
export function parseExpiryDate(dateString) {
  if (!dateString) return null;

  const parts = dateString.split('/');
  if (parts.length !== 2) return null;

  const month = parseInt(parts[0], 10);
  if (isNaN(month) || month < 1 || month > 12) return null;

  if (parts[1].length > 4 || parts[1].length < 1) return null;
  const year = parseInt(formatToFullYear(parts[1]), 10);
  if (isNaN(year)) return null;
  // Date object takes months starting with zero, our month will be + 1
  // So next month, day zero is previous month last day
  // for 12th month, will parse to 0 day of next year which will be last day
  // of previous year
  const returnDate = new Date();
  returnDate.setFullYear(year, month, 0);
  return returnDate;
}
/**
* 21st centurise yearString with length <= 4
* @param  {string}  yearString
* @return {string}  21st centurised yearString or NaN if yearString > 4
*/
function formatToFullYear(yearString) {
  if(yearString.length > 4) return NaN;
  const addOn = '200'.substring(0, 4 - yearString.length);
  return `${addOn}${yearString}`;
}
