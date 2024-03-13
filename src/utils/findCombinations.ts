//Попросил искусственный интеллект написать функцию и он написал, у меня же мозгов не хватило
export default function findCombinationsArray(
  arr: number[]
): [number[], number][] {
  let result: [number[], number][] = [];

  function generateCombinations(
    index: number,
    currentSum: number,
    expression: number[]
  ) {
    if (index === arr.length) {
      result.push([expression, currentSum]);
      return;
    }

    generateCombinations(index + 1, currentSum + arr[index], [
      ...expression,
      arr[index],
    ]);
    generateCombinations(index + 1, currentSum, expression);
  }

  generateCombinations(0, 0, []);

  return result;
}
