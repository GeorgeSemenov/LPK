function removeArrElement(arr: any[], element: any) {
  const index = arr.indexOf(element);
  if (~index) arr.splice(index, 1);
  return;
}

export default removeArrElement;
