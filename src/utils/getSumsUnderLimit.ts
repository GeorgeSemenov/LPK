import arSum from "./arSum";
import { IResultedObj } from "../interfaces";

export default function getArSumsUnderLimits(
  {
    origArr,
    limit,
  }: {
    origArr: number[];
    limit: number;
  },
  showErrFunc?: (msg: string, errorDuration?: number) => void
): IResultedObj {
  if (!origArr.length) {
    if (showErrFunc) {
      showErrFunc("error in getArSumsUnderLimits, origArr is empty ");
    }
    console.error("error in getArSumsUnderLimits, origArr is empty ");
    return {};
  }
  const arr: number[] = Object.assign([], origArr);
  const resultedObj = {};
  while (arr.length) {
    getSumsToTheEndOfArr({ origArr: arr, limit, resultedObj });
    arr.shift();
  }
  return resultedObj;
}

function getSumsToTheEndOfArr(
  {
    origArr,
    resultedObj,
    limit,
  }: {
    origArr: number[];
    resultedObj: IResultedObj;
    limit: number;
  },
  showErrFunc?: (msg: string, errorDuration?: number) => void
) {
  if (!origArr.length) {
    if (showErrFunc) {
      showErrFunc("error in getSumsToTheEndOfArr, arr is empty");
    }
    console.error("error in getSumsToTheEndOfArr, arr is empty");
    return {};
  }
  const arr: number[] = Object.assign([], origArr);
  //Мы перебираем основной массив arr - те числа, что уже были проссумированы - переходят в левый массив, те же что ещё не проссумированы - остаются в правом (обычный arr)
  const leftArr = [];

  while (arr.length) {
    const leftItem = arr.shift();
    if (!leftItem) {
      break;
    }
    leftArr.push(leftItem);
    const leftArrSum = arSum(leftArr);
    if (leftArrSum > limit) {
      break;
    }
    for (const numb of arr) {
      const sum = leftArrSum + numb;
      if (sum > limit) {
        continue;
      }
      if (!(sum in resultedObj)) {
        resultedObj[sum] = [];
      }
      resultedObj[sum].push([...leftArr, numb]);
    }
  }
}
