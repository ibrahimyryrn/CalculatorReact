import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("");
  const [sign, setSign] = useState("");
  const [signCount, setSignCount] = useState(0);

  function handleNum(value) {
    if (signCount === 0) {
      if (value === "." && num1.includes(".")) {
        return;
      }
      setNum1(num1 === "0" ? value : num1 + value);
    } else {
      if (value === "." && num2.includes(".")) {
        return;
      }
      setNum2(value === "0" && num2 === "" ? num2 : num2 + value);
    }
  }

  function handleSign(value) {
    if (num2 !== "") {
      performCalculation();
    }
    setSign(value);
    setSignCount((prev) => prev + 1);
    // console.log(sign, "handleSign");
    // console.log(num1, "handleSignNum1");
    // console.log(num2, "handleSignNum2");
  }

  function performCalculation() {
    let result;
    switch (sign) {
      case "+":
        result = Number(num1) + Number(num2);
        break;
      case "-":
        result = Number(num1) - Number(num2);
        break;
      case "X":
        result = Number(num1) * Number(num2);
        break;
      case "/":
        result = Number(num1) / Number(num2);
        break;
      case "=":
        return num1;
      case "%":
        result = (Number(num1) / 100) * Number(num2);
        break;
      case ".":
        if (signCount === 0) {
          setNum1((prev) => prev + ".");
        } else {
          setNum2((prev) => prev + ".");
        }
        break;
      default:
        return;
    }
    setNum1(String(result));
    setNum2("");
    // console.log(result, "result");
    // console.log(sign, "preformSign");
    // console.log(num1, "performNum1");
    // console.log(num2, "perforNum2");
  }

  function handleReset() {
    setNum1("0");
    setNum2("");
    setSign("");
    setSignCount(0);
  }

  function handleNegativePozitive() {
    setNum1((prev) => prev * -1);
  }

  // console.log(num1, "EnAlttaNum1");
  // console.log(num2, "EnAlttaNum2");
  // console.log(sign, "EnAlttaSign");
  // console.log(signCount, "EnAlttaSignCount");

  return (
    <div className="calculator">
      <div className="display" id="display">
        {num2 !== "" ? num2 : num1}
      </div>
      <Buttons
        handleNum={handleNum}
        handleSign={handleSign}
        handleReset={handleReset}
        handleNegativePozitive={handleNegativePozitive}
      />
    </div>
  );
}

export default App;
