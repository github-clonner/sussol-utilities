import {
  formatDate,
  formatDateAndTime,
  truncateString,
} from '../formatters';

const inputDate = new Date(5000000); // 1970-01-01T01:23:20.000Z

describe('FormatDate', () => { // Will fail if getMonth above fails
  let outputDate;

  it('returns null when given no date', () => {
    outputDate = formatDate(null);
    expect(outputDate).toBe(null);
  });

  it('returns null when given not an object', () => {
    outputDate = formatDate('This is a string');
    expect(outputDate).toBe(null);
    outputDate = formatDate(20160101);
    expect(outputDate).toBe(null);
  });

  it("returns date with slashes for format = 'slashes'", () => {
    outputDate = formatDate(inputDate, 'slashes');
    expect(outputDate).toBe('1/1/1970');
  });

  it("returns date with dots for format = 'dots'", () => {
    outputDate = formatDate(inputDate, 'dots');
    expect(outputDate).toBe('1.1.1970');
  });

  it('returns date with slashes as default', () => {
    outputDate = formatDate(inputDate);
    expect(outputDate).toBe('1/1/1970');
  });
});

describe('formatDateAndTime', () => {
  it('returns correct time', () => {
    const output = formatDateAndTime(inputDate);
    expect(output).toBe('1/1/1970 1:23:20'); // May fail if locale uses different format
  });
});

describe('truncateString', () => {
  it('Correctly truncates a string longer than desired length', () => {
    const output = truncateString('Wow this is a really long string', 10);
    expect(output).toBe('Wow thi...');
  });
  it('Correctly does not truncate a string shorter than desired length', () => {
    const output = truncateString('Short.', 10);
    expect(output).toBe('Short.');
  });
  it('Correctly does not truncate a string matching than desired length', () => {
    const output = truncateString('This is 10', 10);
    expect(output).toBe('This is 10');
  });
});
