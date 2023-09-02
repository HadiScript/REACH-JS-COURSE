import React from "react";
import { toast } from "react-hot-toast";
import Input from "./forms/Input";

const initialValues = {
  name: "",
  age: 0,
  policy: false,
  desc: "",
};
const App = () => {
  const [data, setData] = React.useState(initialValues);

  const valuesHandler = (e) => {
    e.target.name === "policy"
      ? setData({ ...data, [e.target.name]: !data.policy })
      : setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.age === 0 || !data.policy) {
      alert("you have to accept the policy");
    } else {
      toast.success("Your data has been submitted, thank you.", {
        position: "bottom-left",
      });
      console.log({ data });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        name="name"
        required
        value={data.name}
        onChange={valuesHandler}
        placeholder="enter your name"
      />
      <br />
      <Input
        type="number"
        name="age"
        require={true}
        value={data.age}
        valuesHandler={valuesHandler}
      />
      <br />
      <input
        type="checkbox"
        name="policy"
        required
        checked={data.policy}
        onChange={valuesHandler}
        placeholder=""
      />
      <br />
      <br />
      <textarea
        type="text"
        name="desc"
        required
        value={data.desc}
        onChange={valuesHandler}
        placeholder="Decriptions"
      />
      <br />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default App;
