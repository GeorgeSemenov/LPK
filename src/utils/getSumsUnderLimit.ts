import arSum from "./arSum";

interface IResultedObj {
  [key: number]: number[];
}

export default function getArSumsUnderLimits(
  origArr: number[],
  limit: number
): IResultedObj {
  if (!origArr.length) {
    return {};
  }
  const arr: number[] = Object.assign([], origArr);
  while (arr.length) {
    getSumsToTheEndOfArr();
  }
  return {};
}

function getSumsToTheEndOfArr({
  arr,
  resultedObj,
  limit,
}: {
  arr: number[];
  resultedObj: IResultedObj;
  limit: number;
}): IResultedObj {
  return {};
}
