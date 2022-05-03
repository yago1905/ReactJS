import React from 'react';
import './Input.css';

export const Input = (props) => {
  return (
    <textarea
      value={props.value}
      onChange={props.change}
      className="inputField"
    />
  );
};
