import { ISumsObj } from "../interfaces";

export default function removeSumsAboveLimit(sumsObj: ISumsObj, limit: number) {
  const keys = Object.keys(sumsObj).map((key) => +key);
  keys.forEach((key) => {
    if (key > limit) {
      delete sumsObj[key];
    }
  });
}
