import React from "react";


const InputBox = (props) => {
  return (
    <div className="inputBox">
      <label>{props.label}</label>
      <input type={props.type} name={props.name} onChange={this.handleChange} />
    </div>
  );
}

export default InputBox;