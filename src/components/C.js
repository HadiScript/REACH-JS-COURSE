import React, { useContext } from "react";
import { MoneyContext } from "../App";
// 100 -> 200
const C = () => {
  const [value, setValue] = useContext(MoneyContext);

  const InvestMoney = () => setValue(value + 100);

  return (
    <>
      <h1>FROM C - {value}</h1>
      <button onClick={InvestMoney}>Do Bussiness</button>
      <hr />
    </>
  );
};

export default C;
