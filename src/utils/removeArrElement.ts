function removeArrElement(arr: any[], element: any) {
  const index = arr.indexOf(element);
  arr.splice(index, 1);
}

export default removeArrElement;
