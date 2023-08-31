// nested Context Example ;)

import React, { createContext, useReducer, useState } from "react";
import A from "./components/A";
// 100

export const MoneyContext = createContext();
export const NadraContext = createContext();

let initValues = {
  x: 0,
  y: 0,
};

const reducers = (state, action) => {
  const { type, payload } = action;

  if (type === "changeKroXko") {
    return { ...state, x: state.x + payload };
  }
  //  else if(type === 'changeKroYKo') -> Do It Your Self
};

export const ReducerContext = createContext();

const App = () => {
  const [value, setValue] = useState(200);
  const [cast, setCast] = useState("Rana");

  const [state, dispatch] = useReducer(reducers, initValues);

  return (
    <MoneyContext.Provider value={[value, setValue]}>
      <NadraContext.Provider value={[cast, setCast]}>
        <ReducerContext.Provider value={[state, dispatch]}>
          <A />
        </ReducerContext.Provider>
      </NadraContext.Provider>
    </MoneyContext.Provider>
  );
};

export default App;
