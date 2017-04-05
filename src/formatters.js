/**
* Returns the date object passed in as a string in either the format dd/mm/yyyy or dd.mm.yyyy
* @param  {Date}   date    The date to format and return as a string
* @param  {string} format  Either 'slashes', 'dots', or undefined (will use slashes)
* @return {string}         The formatted string
*/
export function formatDate(date, format) {
  if (!date || typeof date !== 'object') return null;
  switch (format) {
    default:
    case 'slashes':
      return `${date.getDate()}/${getMonth(date)}/${date.getFullYear()}`;
    case 'dots':
      return `${date.getDate()}.${getMonth(date)}.${date.getFullYear()}`;
  }
}

function getMonth(date) {
  return date.getMonth() + 1; // Date.getMonth is 0 indexed
}

/**
* Returns the date object passed in as a formatted string showing the date and time
* @param  {Date}   date    The date (including time) to format and return as a string
* @param  {string} format  Either 'slashes', 'dots', or undefined (will use slashes)
* @return {string}         The formatted string
*/
export function formatDateAndTime(date, format) {
  const time = date.toLocaleTimeString();
  return `${formatDate(date, format)} ${time.substring(0, time.length - 3)}`;
}

/**
* return Date Object as a string in format mm/yyyy
* @param  {Date}   date    The date to format and return as a string
* @return {string}         The formatted string
*/
export function formatExpiryDate(date) {
  if (!date) return '';

  let month = (date.getMonth() + 1).toString();
  month = month.length === 1 ? `0${month}` : month;
  return `${month}/${date.getFullYear()}`;
}

/**
* Returns the string chopped off at maxLength, with ... replacing the last three characters if it
* overflowed
* @param  {string}   string     The string to be truncated
* @param  {integer}  maxLength  The maximum number of characters in the returned string
* @return {string}              The truncated string, with ellipses if it overflowed
*/
export function truncateString(string, maxLength) {
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength - 3)}...`;
}
