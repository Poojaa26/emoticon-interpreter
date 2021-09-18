import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "🙃": "Upside-Down Face",
  "🤫": "Shushing Face",
  "😌": "Relieved Face",
  "😛": "Face with Tongue"
};
var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(event) {
    var input = event.target.value;

    if (input in emojiDictionary || input === "")
      setMeaning(emojiDictionary[input]);
    else setMeaning("Emoticon not in our Database");
  }
  function clickHandler(event) {
    var input = event.target.innerHTML;

    setMeaning(emojiDictionary[input]);
  }
  return (
    <div className="App">
      <h1>Emoticon Interpreter</h1>
      <input onChange={inputHandler} />
      <br />
      <br />
      <p>{meaning}</p>
      <h2>Emoticons We Know</h2>
      {emojisweknow.map((item) => (
        <span
          onClick={clickHandler}
          style={{ fontSize: "30px", padding: "10px", cursor: "pointer" }}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
