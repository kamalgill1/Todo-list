import React from "react";
import { useState } from "react";
import "./Todoinput.css";

function TodoInput(props) {
  const [inputText, setInputText] = useState();

  const HandleSubmit = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div>
      <h1></h1>
      <div className="input-field">
        <div className="center-container">
          <input
            type="text"
            placeholder="Enter your Todo"
            name="inputText"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={HandleSubmit}
          />

          <button
            onClick={() => {
              props.addList(inputText);
              setInputText("");
            }}
          >
            Add Todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoInput;
