import removeArrElement from "./removeArrElement";

export default function isArrContainAllNumbersInOtherArr(
  origArr: number[],
  otherArr: number[]
): boolean {
  const arr = [...origArr];
  removeArrElement(arr, 0);
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
