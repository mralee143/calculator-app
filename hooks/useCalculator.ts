import { useState } from "react";

export default function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const handleInput = (input: string) => {
    if (!isNaN(Number(input)) || input === ".") {
      if (waitingForSecond) {
        setDisplay(input === "." ? "0." : input);
        setWaitingForSecond(false);
      } else {
        setDisplay(display === "0" && input !== "." ? input : display + input);
      }
    } else if (["+", "−", "×", "÷"].includes(input)) {
      setFirstValue(parseFloat(display));
      setOperator(input);
      setWaitingForSecond(true);
    } else if (input === "=") {
      if (operator && firstValue !== null) {
        const secondValue = parseFloat(display);
        let result = firstValue;
        switch (operator) {
          case "+":
            result += secondValue;
            break;
          case "−":
            result -= secondValue;
            break;
          case "×":
            result *= secondValue;
            break;
          case "÷":
            result /= secondValue;
            break;
        }
        setDisplay(String(result));
        setFirstValue(null);
        setOperator(null);
      }
    } else if (input === "C") {
      setDisplay("0");
      setFirstValue(null);
      setOperator(null);
    } else if (input === "±") {
      setDisplay(String(parseFloat(display) * -1));
    } else if (input === "%") {
      setDisplay(String(parseFloat(display) / 100));
    }
  };

  return { display, handleInput };
}
