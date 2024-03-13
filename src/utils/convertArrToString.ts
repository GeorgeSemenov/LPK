import removeArrElement from "./removeArrElement";

export default function arrToString(arr: number[]) {
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
