import arSum from "./arSum";
import { ISumsObj } from "../interfaces";
import arrangeArrFromMaxToMin from "./arrangeArrFromMaxToMin";
import removeSumsWithUsedNumbers from "./removeSumsWithUsedNumbers";
import findCombinationsArray from "./findCombinations";
import removeSumsAboveLimit from "./removeSumsAboveLimit";

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
  const arr: number[] = [...origArr];
  const sumsObj = createRawSumsObj(arr);

  removeSumsAboveLimit(sumsObj, limit);

  const keys = arrangeArrFromMaxToMin(
    //Этот массив нужен, чтобы знать, в каком порядке будут удаляться суммы, в которых используются дублирующие значения
    Object.keys(sumsObj).map((item) => +item)
  ); //суммы объекта отсортированы от большего к меньшему

  removeSumsWithUsedNumbers(keys, sumsObj, origArr);

  return sumsObj;
}

function createRawSumsObj(arr: number[]): ISumsObj {
  const sumsObj: ISumsObj = {};
  const combinationsAndSums = findCombinationsArray(arr);
  combinationsAndSums.forEach((combiSum) => {
    const sum = combiSum[1];
    const combination = combiSum[0];
    if (!sumsObj[sum]) {
      sumsObj[sum] = [];
    }
    sumsObj[sum].push(combination);
  });
  return sumsObj;
}
