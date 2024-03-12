import removeArrElement from "./removeArrElement";

export default function isArrContainAllNumbersInOtherArr(
  arr: number[],
  otherArr: number[]
): boolean {
  const copyOtherArr = [...otherArr];
  for (const numb of arr) {
    if (!copyOtherArr.length) {
      return false;
    }
    if (copyOtherArr.includes(numb)) {
      removeArrElement(copyOtherArr, numb);
    } else {
      return false;
    }
  }
  return true;
}
