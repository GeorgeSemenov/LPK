import arSum from "./arSum";
import { ISumsObj } from "../interfaces";
import arrangeArrFromMaxToMin from "./arrangeArrFromMaxToMin";

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

  //Убрать числа, котороые используются в больших суммах  логика проста -
  //одно число может использоваться во множестве сумм, нужно чтобы оно присутствовалло только в нибольшей сумме
  // removeWrongSums(suns:number[], sumsObj, origArr)
  //// for(const sum of sums)
  ////// if(!sumsObj[sum]) continue
  ////// for(numbArr of sumsObj[sum])
  //////// copyOrigArr=[...origArr];
  //////// for(numb of numbArr)
  //////// is arraysEqual()
  //////// if copyr.includes(numb))
  ////////// удалить это числа из копии
  ////////// else(!origArr.includes(numb))
  //////////// break; delete numbArr
  //////////// if(!sumsObj[sum].length)
  ////////////// sumsObj[sum] delete, break// интересно понравится все циклов или один
  //////// for(numb of numbArr)
  ////////// index = origArr.indexof(numb)
  ////////// origArr.splice(index,1)

  
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
