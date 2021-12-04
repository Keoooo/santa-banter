import React, { useState, useEffect } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurChangeHandler = (event) => {
    setIsTouched(true);
  };

  const reset = (event) => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    hasError,
    reset,
    isValid: valueIsValid,
    valueChangeHandler,
    isTouched,
    inputBlurChangeHandler,
  };
};

export default useInput;
