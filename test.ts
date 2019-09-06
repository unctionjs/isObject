/* eslint-disable no-magic-numbers, no-undefined */
import isObject from "./index.ts";

test(() => {
  expect(isObject(null)).toBeFalsy();
});

test(() => {
  expect(isObject(undefined)).toBeFalsy();
});

test(() => {
  expect(isObject("b")).toBeFalsy();
});

test(() => {
  expect(isObject({})).toBeTruthy();
});

test(() => {
  expect(isObject([])).toBeFalsy();
});

test(() => {
  expect(isObject(1)).toBeFalsy();
});

test(() => {
  expect(isObject(new Buffer("x"))).toBeFalsy();
});
