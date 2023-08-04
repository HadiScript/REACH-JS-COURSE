import React, { useState } from "react";

const App = () => {
  const [id, setId] = useState(1);
  const [newsLetters, setNewsLetters] = useState([]);
  const [limit, setLimit] = useState(3);

  const addNews = () => {
    setNewsLetters([
      ...newsLetters,
      {
        id: id,
        title: `today news 4 ${id} `,
        news: "imply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      },
    ]);
    setId(id + 1)
  };

  const handleShowMore = () => {
    setLimit(limit + 1);
  };

  const removeHandler = (id) => {
    setNewsLetters(newsLetters.filter((x) => x.id !== id));
  };

  return (
    <div className="container">
      <h1 style={{ color: "rgb(33, 25, 146)" }}> New Letters </h1>

      <div style={{ width: "100%", marginBottom: "10px" }}>
        <button
          onClick={addNews}
          style={{
            padding: "5px",
            borderRadius: "5px",
            backgroundColor: "rgb(33, 25, 146)",
            color: "white",
            border: "none",
          }}
        >
          Add News
        </button>
        <button
          onClick={handleShowMore}
          style={{
            padding: "5px",
            marginLeft: "10px",
            borderRadius: "5px",
            backgroundColor: "white",
            color: "rgb(33, 25, 146)",
            border: "1px solid black",
          }}
        >
          show more
        </button>

        <span>
          {" "}
          {limit} / {newsLetters.length}{" "}
        </span>
      </div>

      {newsLetters.slice(0, limit).map((x) => (
        <div className="box">
          <div style={{ padding: "20px" }}>
            <h2> {x.title}</h2>
            <p> {x.news} </p>
            <small onClick={() => removeHandler(x.id)}> remove item </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
