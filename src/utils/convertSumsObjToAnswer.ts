import { ISumsObj } from "../interfaces";
import removeArrElement from "./removeArrElement";

//Конвертирует подсчитанный объект (sumsObj) в строку, где
//будет указанны суммы - начиная от ближайшей к limit и через знак равенства будут указанны числа(со множетелями) которые обрзауют эти суммы
export default function convertSumsObjToAnswer(sumsObj: ISumsObj): string {
  let resultedString = "";
  for (const key in sumsObj) {
    resultedString += `${key}\n`;
    for (const arr of sumsObj[key]) {
      resultedString += `   ${arrToString(arr)}\n`;
    }
    resultedString += "\n";
  }
  return resultedString;
}

function arrToString(arr: number[]) {
  const copyArr = [...arr];
  let str = "";
  while (copyArr.length) {
    const number = copyArr.pop();
    let multiplier = 1;
    if (number === undefined) {
      continue;
    }
    while (copyArr.includes(number)) {
      removeArrElement(copyArr, number);
      multiplier++;
    }

    str += multiplier > 1 ? `${number}*${multiplier} ` : `${number} `;
  }
  return str;
}
