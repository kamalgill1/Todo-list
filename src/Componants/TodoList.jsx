import React from "react";
import "./TodoList.css";

function TodoList(props) {

    const testing=()=>{
        prompt("testing2.O")
        console.log("passed")
    }
 
  return (
    <div>
      <span className="hell">
        <li >{props.item}</li>
        {/* <h1>{props.deleteItem}</h1> */}
        <i   className="fa-solid fa-trash" onClick={e=>{
          props.deleteItem(props.index)
        }}></i>
      </span>
    </div>
  );
}

export default TodoList;
