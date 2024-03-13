import { ISumsObj } from "../interfaces";
import isArrContainAllNumbersInOtherArr from "./isArrContainAllNumbers";
import removeArrElement from "./removeArrElement";

//Убирает суммы в которых дублируются числа используемые в больших суммах (одно число может использоваться только один раз)
export default function removeSumsWithUsedNumbers(
  sums: number[],
  sumsObj: ISumsObj,
  origArr: number[]
) {
  //в объкте ISumsObj ключами являются суммы, поэтому keys и sums - идентичны
  const arr = [...origArr];
  for (const sum of sums) {
    if (!sumsObj[sum]) continue;
    const conpyNumbArrs = [...sumsObj[sum]]; //т.к. будут удаляться sumsObj[sum] то нельзя, чтобы по нему проходил массив, поэтому его и копирую
    for (const numbArr of conpyNumbArrs) {
      if (isArrContainAllNumbersInOtherArr(numbArr, arr)) {
        for (const numb of numbArr) {
          removeArrElement(arr, numb);
        }
      } else {
        removeArrElement(sumsObj[sum], numbArr);
        if (!sumsObj[sum].length) {
          delete sumsObj[sum];
          break;
        }
      }
    }
  }
}
