export default function arSum(arr: (number | undefined)[]): number {
  const result = arr.reduce((curVal, nextVal) => {
    if (!nextVal) nextVal = 0;
    if (!curVal) curVal = 0;
    return (curVal += nextVal);
  }, 0);
  return result ? result : 0;
}
