import isType from "@unction/istype";
export default function isObject<A> (value: A): boolean {
  return isType("Object")(value);
}
