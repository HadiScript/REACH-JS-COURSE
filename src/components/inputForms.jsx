import React from "react";

const InputForms = ({ productValues, inputHandlers, addProduct }) => {
  return (
    <div className="form">
      <input
        type="text"
        placeholder="Enter name"
        value={productValues.name}
        name="name"
        onChange={inputHandlers}
      />
      <input
        type="number"
        name="price"
        placeholder="Enter price"
        value={productValues.price}
        onChange={inputHandlers}
      />

      <input
        type="text"
        name="desc"
        placeholder="Enter Description"
        value={productValues.desc}
        onChange={inputHandlers}
      />

      <button onClick={addProduct}>submit</button>
    </div>
  );
};

export default InputForms;
