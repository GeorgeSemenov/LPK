import { constants } from "../consts";
export default function convertStringToNumbersWithMultypliesArr(
  str: string,
  showError: (msg: string, errorDuration?: number) => void
): number[] {
  const { MULTIPLY_SYMBOL } = constants;
  if (!str.length) {
    showError(
      "error in convertNumbersWithMultypliesToArr function. str is empty."
    );
    console.error(
      "error in convertNumbersWithMultypliesToArr function. str is empty."
    );
    return [];
  }
  const resultedArr = [];
  const numbersWithMultiplies = str.split(" ");
  for (const numberWithMulitplier of numbersWithMultiplies) {
    let number: number, multiplier: number;
    if (numberWithMulitplier.includes(MULTIPLY_SYMBOL)) {
      const numberAndMultiplier = numberWithMulitplier.split(MULTIPLY_SYMBOL);
      number = returnIfNumberAwareIfNot(numberAndMultiplier[0], showError);
      multiplier = returnIfNumberAwareIfNot(numberAndMultiplier[1], showError);
    } else {
      number = returnIfNumberAwareIfNot(numberWithMulitplier, showError);
      multiplier = 1;
    }

    for (let i = 0; i < multiplier; i++) {
      resultedArr.push(number);
    }
  }

  return resultedArr;
}

function returnIfNumberAwareIfNot(
  val: any,
  showError: (msg: string, errorDuration?: number) => void
) {
  if (!isFinite(+val)) {
    showError(
      `некорректное значение ${val}. Для указания дробной части используй точку.`
    );
    return 0;
  }
  return +val;
}
