import arSum from "./arSum";
import { ISumsObj } from "../interfaces";
import arrangeArrFromMaxToMin from "./arrangeArrFromMaxToMin";
import removeWrongSums from "./removeWrongSums";

export default function convertArrToSumsObj(
  {
    origArr,
    limit,
  }: {
    origArr: number[];
    limit: number;
  },
  showErrFunc?: (msg: string, errorDuration?: number) => void
): ISumsObj {
  if (!origArr.length) {
    if (showErrFunc) {
      showErrFunc("error in getArSumsUnderLimits, origArr is empty ");
    }
    console.error("error in getArSumsUnderLimits, origArr is empty ");
    return {};
  }
  const arr: number[] = Object.assign([], origArr);
  const sumsObj = {};
  while (arr.length) {
    getSumsToTheEndOfArr({ origArr: arr, limit, sumsObj });
    arr.shift();
  }
  const keys = arrangeArrFromMaxToMin(
    Object.keys(sumsObj).map((item) => +item)
  ); //суммы объекта отсортированы от большего к меньшему

  removeWrongSums(keys, sumsObj, origArr);

  return sumsObj;
}

function getSumsToTheEndOfArr(
  {
    origArr,
    sumsObj,
    limit,
  }: {
    origArr: number[];
    sumsObj: ISumsObj;
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
      if (!(sum in sumsObj)) {
        sumsObj[sum] = [];
      }
      sumsObj[sum].push([...leftArr, numb]);
    }
  }
}
