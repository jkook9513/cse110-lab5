// unit.test.js
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// Tests - isPhoneNumber
test('isPhoneNumber - valid phone number', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber - valid phone number without area code', () => {
  expect(isPhoneNumber('123-4567')).toBe(true);
});
test('isPhoneNumber - invalid phone number', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});
test('isPhoneNumber - invalid phone number with letters', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});

// Tests - isEmail
test('isEmail - valid email', () => {
  expect(isEmail('abcd@ucsd.edu')).toBe(true);
});
test('isEmail - valid email with letters and numbers', () => {
  expect(isEmail('abc123@gmail.com')).toBe(true);
});
test('isEmail - invalid email with missing domain', () => {
  expect(isEmail('abcd@.com')).toBe(false);
});
test('isEmail - invalid email with dashes', () => {
  expect(isEmail('abc-123@.com')).toBe(false);
});

// Tests - isStrongPassword
test('isStrongPassword - valid password', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});
test('isStrongPassword - valid password with underscore', () => {
  expect(isStrongPassword('abc_123')).toBe(true);
});
test('isStrongPassword - invalid password with special characters', () => {
  expect(isStrongPassword('abc@123!')).toBe(false);
});
test('isStrongPassword - invalid password with spaces', () => {
  expect(isStrongPassword('abc 123')).toBe(false);
});

// Tests - isDate
test('isDate - valid date', () => {
  expect(isDate('05/06/2025')).toBe(true);
});
test('isDate - valid date with single digit month and day', () => {
  expect(isDate('5/6/2025')).toBe(true);
});
test('isDate - invalid date with wrong format', () => {
  expect(isDate('2025/05/06')).toBe(false);
});
test('isDate - invalid date with wrong format', () => {
  expect(isDate('May 6 2025')).toBe(false);
});

// Tests - isHexColor
test('isHexColor - valid hex color', () => {
  expect(isHexColor('#aabbcc')).toBe(true);
});
test('isHexColor - valid hex color without #', () => {
  expect(isHexColor('aabbcc')).toBe(true);
});
test('isHexColor - invalid hex color with wrong format', () => {
  expect(isHexColor('#aabbccdd')).toBe(false);
});
test('isHexColor - invalid hex color with spaces', () => {
  expect(isHexColor('#abc 123')).toBe(false);
});

 