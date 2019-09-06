/* eslint-disable no-magic-numbers, no-undefined */
import isObject from "./index";

test("works", () => {
  expect(isObject(null)).toBeFalsy();
});

test("works", () => {
  expect(isObject(undefined)).toBeFalsy();
});

test("works", () => {
  expect(isObject("b")).toBeFalsy();
});

test("works", () => {
  expect(isObject({})).toBeTruthy();
});

test("works", () => {
  expect(isObject([])).toBeFalsy();
});

test("works", () => {
  expect(isObject(1)).toBeFalsy();
});

test("works", () => {
  expect(isObject(new Buffer("x"))).toBeFalsy();
});
