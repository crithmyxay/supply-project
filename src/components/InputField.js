import React from "react";


const InputBox = (props) => {
  return (
    <div className="inputBox">
      <span>{props.label}</span>
      <input type={props.type} name={props.name} onChange={this.handleChange}></input>
    </div>
  );
}

export default InputBox;