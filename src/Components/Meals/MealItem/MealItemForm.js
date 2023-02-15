import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setamountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const entertedAmount = amountInputRef.current.value;
    const entertedAmountNumber = +entertedAmount;

    if (
      entertedAmount.trim().length === 0 ||
      entertedAmountNumber < 1 ||
      entertedAmountNumber > 10
    ) {
      setamountIsValid(false);
      return;
    }

    props.onAddToCart(entertedAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add+</button>
      {!amountIsValid && <p>Please Enter a Valid Amount (1-10)</p>}
    </form>
  );
};

export default MealItemForm;
