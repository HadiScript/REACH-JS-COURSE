import React, { useCallback, useState } from "react";

let newSet = new Set();

const App = () => {
  const [info, setInfo] = useState({ age: 0 });
  const [name, setName] = useState("");

  // const changeInfo = useCallback(() => setInfo({ age: 100 }), [info.age]);
  const changeInfo = useCallback(() => setInfo({ age: 100 }), [info]);
  // both are same

  const changeName = () => setName("John Cena");

  newSet.add(changeInfo);
  newSet.add(changeName);

  console.log({ newSet });

  return (
    <>
      <h3> Info- {info.age} age </h3>{" "}
      <button onClick={changeInfo}> Change the info </button>
      <hr />
      <h3> Name - {name} </h3>{" "}
      <button onClick={changeName}> Change the Name </button>
    </>
  );
};

export default App;
