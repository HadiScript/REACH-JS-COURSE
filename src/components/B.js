import React, { useContext } from "react";
import C from "./C";
import { NadraContext } from "../App";

const B = () => {
  const [cast, setCast] = useContext(NadraContext);

  const changeTheCast = () => setCast("Rajpoot");

  return (
    <>
      <h1>FROM B</h1>
      <button onClick={changeTheCast}> Chahge the cast </button>
      <hr />
      <C />
    </>
  );
};

export default B;
