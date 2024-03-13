import { Typography } from "@mui/material";
import { ISumsObj } from "../interfaces";
import arrToString from "../utils/convertArrToString";
import arrangeArrFromMaxToMin from "../utils/arrangeArrFromMaxToMin";

export default function AnswerField({ sumsObj }: { sumsObj: ISumsObj }) {
  if (!sumsObj) return <div></div>;
  const order = arrangeArrFromMaxToMin(
    Object.keys(sumsObj).map((item) => +item)
  );
  return (
    <div>
      {order.map((key) => (
        <div>
          <Typography variant="h5">{key}</Typography>
          {sumsObj[key].map((numbers) => (
            <Typography>{arrToString(numbers)}</Typography>
          ))}
        </div>
      ))}
    </div>
  );
}
