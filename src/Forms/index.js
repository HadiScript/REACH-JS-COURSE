import React, { useState } from "react";

const InitDays = {
  monday: false,
  tuesday: false,
  wednesday: false,
};

const Forms = () => {
  const [name, setName] = useState("");
  const [day, setDay] = useState(InitDays);
  const [course, setCourse] = useState("");
  const [FAQS, setFAQS] = useState([]);

  const addFaqs = (e) => {
    e.preventDefault();
    setFAQS([...FAQS, { question: "", answer: "" }]);
  };

  const handleFAQSchange = (e, index) => {
    // console.log(e.target.value, e.target.name, index, " here is the FAQS");
    const { name, value } = e.target;

    const lastFAQS = [...FAQS];
    lastFAQS[index][name] = value;
    setFAQS(lastFAQS);
  };

  const submitHandler = (e) => {
    e.preventDefault();


    console.log("form has been submitted", name, course, day, FAQS);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label> Course Name </label>
        <input
          type="text"
          placeholder="enter the course name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        {JSON.stringify(course)}
        <br />
        <label> Choose Course </label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          <option value={"random bla bla"}> Choose </option>
          <option value={"ReactJS"}> ReactJS </option>
          <option value={"NODEJS"}> NODEJS </option>
          <option value={"Angular"}> Angular </option>
          <option value={"Python"}> Python </option>
        </select>

        <br />

        <hr />
        <h5> Conducting Days </h5>

        <label>Monday</label>
        <input
          type="checkbox"
          value="monday"
          checked={day.monday}
          onChange={() => {
            setDay((prev) => ({ ...prev, ["monday"]: !day.monday }));
          }}
        />
        <label>Tuesday</label>
        <input
          type="checkbox"
          value="tuesday"
          checked={day.tuesday}
          onChange={() => {
            setDay((prev) => ({ ...prev, ["tuesday"]: !day.tuesday }));
          }}
        />
        <label>Wednesday</label>
        <input
          type="checkbox"
          value="wednesday"
          checked={day.wednesday}
          onChange={() => {
            setDay((prev) => ({ ...prev, ["wednesday"]: !day.wednesday }));
          }}
        />

        <br />
        <hr />

        <button onClick={addFaqs}>Add FAQS</button>

        {FAQS.map((x, index) => (
          <div>
            <label>Question</label>
            <input
              type="text"
              name="question"
              value={x.question}
              onChange={(e) => handleFAQSchange(e, index)}
            />
            <br />
            <label>Answer</label>
            <input
              type="text"
              name="answer"
              value={x.answer}
              onChange={(e) => handleFAQSchange(e, index)}
            />
            <button>Remvoe</button>
          </div>
        ))}



          <input type="date" />
        <br />
        <button type="submit">submit</button>
      </form>
      <hr />
      <h3>Name : {name}</h3>
    </>
  );
};

export default Forms;
