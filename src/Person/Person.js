import React from "react";
import './Person.css';

const person = props => {

  return (
    <div className="Person">
      <p onClick={props.click}>
        NAME: {props.name} AGE: {props.age} LENGTH: {props.lengthNumbers}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
