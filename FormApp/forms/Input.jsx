import React from "react";

const Input = ({ type, name, require, value, valuesHandler, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      // required={require}
      value={value}
      onChange={valuesHandler}
      placeholder={placeholder}
    />
  );
};

export default Input;
