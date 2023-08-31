import React, { useContext } from "react";
import B from "./B";
import { MoneyContext, NadraContext, ReducerContext } from "../App";

const A = () => {
  const [value, setValue] = useContext(MoneyContext);
  const [cast] = useContext(NadraContext);
  const [state, dispatch] = useContext(ReducerContext);

  return (
    <>
      <h1>FROM A - {value}</h1>
      <hr />
      {cast}
      <B />
      <hr />
      <h5> x: {state.x} </h5>
      <button onClick={() => dispatch({ type: "changeKroXko", payload: 1000 })}>
        Change Karo X ko
      </button>
      <hr />
      <h5> y: {state.y} </h5>
    </>
  );
};

export default A;
