export default function arSum(arr: number[]): number {
  return arr.reduce((curVal, nextVal) => {
    return (curVal += nextVal);
  }, 0);
}
