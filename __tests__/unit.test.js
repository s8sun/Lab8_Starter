// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber
test('test incorrect phone number', () => {
    expect(functions.isPhoneNumber("not a phone")).toBe(false);
  });

test('test incorrect phone number', () => {
    expect(functions.isPhoneNumber("654 xxx ????")).toBe(false);
  });

test('test correct phone number', () => {
    expect(functions.isPhoneNumber("654-999-3322")).toBe(true);
  });

  test('test correct phone number', () => {
    expect(functions.isPhoneNumber("654-999-9999")).toBe(true);
  });

//   isStrongPassword
test('test weak password', () => {
    expect(functions.isStrongPassword("654-999-9999")).toBe(false);
  });

test('test weak password', () => {
    expect(functions.isStrongPassword("3")).toBe(false);
  });

test('test strong password', () => {
    expect(functions.isStrongPassword("AllanSun333")).toBe(true);
  });

test('test strong password', () => {
    expect(functions.isStrongPassword("zzzss339")).toBe(true);
  });

//   isDate
test('test wrong date', () => {
    expect(functions.isDate("zzzss339")).toBe(false);
  });
test('test wrong date', () => {
    expect(functions.isDate("1989 06 01")).toBe(false);
  });

  test('test wrong date', () => {
    expect(functions.isDate("1/1/2001")).toBe(true);
  });

  test('test wrong date', () => {
    expect(functions.isDate("01/11/2001")).toBe(true);
  });

//   isHexColor
test('test false Hexcolor ', () => {
    expect(functions.isHexColor("zzzss339")).toBe(false);
  });

test('test false Hexcolor ', () => {
    expect(functions.isHexColor("99999")).toBe(false);
  });

  test('test Hexcolor ', () => {
    expect(functions.isHexColor("#AAA")).toBe(true);
  });

  test('test Hexcolor ', () => {
    expect(functions.isHexColor("#954")).toBe(true);
  });

//   isEmail
test('test false email', () => {
    expect(functions.isEmail("zzzss339")).toBe(false);
  });

  test('test false email', () => {
    expect(functions.isEmail("name last name")).toBe(false);
  });

  test('test email', () => {
    expect(functions.isEmail("zzzss339@gmail.com")).toBe(true);
  });
  test('test email', () => {
    expect(functions.isEmail("zzzss339@ucsd.com")).toBe(true);
  });