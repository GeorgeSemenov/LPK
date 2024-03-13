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
        <div style={{ marginBottom: "15px" }}>
          <Typography variant="h5" color={"Highlight"}>
            {key}
          </Typography>
          {sumsObj[key].map((numbers) => (
            <Typography>{arrToString(numbers)}</Typography>
          ))}
        </div>
      ))}
    </div>
  );
}
