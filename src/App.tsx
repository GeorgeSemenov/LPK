import React, { useState } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import convertStringToNumbersWithMultypliesArr from "./utils/convertStringToNumbersWithMultypliesArr";
import convertArrToSumsObj from "./utils/convertArrToSumsObj";
import AnswerField from "./components/AnswerField";

function App() {
  const [gilsaInput, setGilsaInput] = useState("");
  const [siemInput, setSiemInput] = useState("8400");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(
    "Данные введены не корректно, проверьте."
  );
  const [sumsObj, setSumsObj] = useState({});
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gilsaInput.length) {
      showError("Строка ввода длин гильз пуста.");
      return;
    }
    if (!siemInput.length) {
      showError("Строка ввода длин съёма пуста.");
      return;
    }
    if (!isFinite(+siemInput)) {
      showError(
        "Строка ввода длин съёма должна содержать число. Если число дробное - оно должно быть написано через точку."
      );
      return;
    }
    const numbersArr = convertStringToNumbersWithMultypliesArr(
      gilsaInput,
      showError
    );
    setSumsObj(
      convertArrToSumsObj({
        origArr: numbersArr,
        limit: +siemInput,
      })
    );
  }
  function showError(msg: string, errorDuration: number = 5) {
    setIsError(true);
    setErrorMsg(msg);
    setTimeout(() => {
      setIsError(false);
    }, errorDuration * 1000);
  }
  return (
    <form onSubmit={onSubmit}>
      <FormGroup sx={{ padding: "15px" }}>
        {isError && (
          <Typography color="red" fontSize={"2rem"}>
            {errorMsg}
          </Typography>
        )}
        <FormControl sx={{ marginBottom: "15px" }}>
          <InputLabel htmlFor="gilsaInput">Длины гильз</InputLabel>
          <Input
            placeholder="Введи данные через пробел"
            id="gilsaInput"
            onChange={(e) => {
              setGilsaInput(e.target.value);
            }}
            value={gilsaInput}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "15px" }}>
          <InputLabel htmlFor="siemInput">Длина сьёма</InputLabel>
          <Input
            placeholder="8400"
            id="siemInput"
            onChange={(e) => {
              setSiemInput(e.target.value);
            }}
            value={siemInput}
          />
        </FormControl>
        <Button variant="contained" sx={{ marginBottom: "15px" }} type="submit">
          Найти подходящую сумму
        </Button>
        <Typography component={"h3"} textAlign={"center"}>
          Тут ведут расчёт суровые работники лесопромышленной области.
        </Typography>
        <AnswerField sumsObj={sumsObj} />
        <img
          alt="Знойный лесоруб"
          src="https://www.veseloeradio.ru/vardata/modules/news/files/1/2453/news_file_2453_599fca86a29b4.jpg"
          width="100%"
        />
      </FormGroup>
    </form>
  );
}

export default App;
