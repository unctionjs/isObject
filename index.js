import isType from "@unction/istype";
export default function isObject (value) {
  return isType("Object")(value);
}
