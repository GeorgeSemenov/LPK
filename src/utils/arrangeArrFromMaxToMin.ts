export default function arrangeArrFromMaxToMin(arr: number[]): number[] {
  const arrangedArr: number[] = [];
  const copyArr = [...arr];
  while (copyArr.length) {
    let max = copyArr[0];
    let indexOfMax = 0;
    for (let i = 0; i < copyArr.length; i++) {
      if (max < copyArr[i]) {
        max = copyArr[i];
        indexOfMax = i;
      }
    }
    copyArr.splice(indexOfMax, 1);
    arrangedArr.push(max);
  }
  return arrangedArr;
}
