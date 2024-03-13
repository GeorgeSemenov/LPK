function removeArrElement(arr: any[], element: any) {
  const index = arr.indexOf(element);
  if (~index) return;
  arr.splice(index, 1);
}

export default removeArrElement;
