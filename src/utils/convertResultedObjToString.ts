import { IResultedObj } from "../interfaces";

//Конвертирует подсчитанный объект (resultedObj) в строку, где
//будет указанны суммы - начиная от ближайшей к limit и через знак равенства будут указанны числа(со множетелями) которые обрзауют эти суммы
export default function convertResultedObjToAnswer(
  resultedObj: IResultedObj
): string {
  let resultedString = "";
  //создай массив свойств объекта - keys
  //преобразуй массив чтобы в начале было значения близкие к limit используй функцию closestToLimitFirst
  return resultedString;
}