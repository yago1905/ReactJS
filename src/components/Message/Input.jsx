import React from 'react';
import './styles/Input.css';

export const Input = (props) => {
  return (
    <textarea
      value={props.value}
      onChange={props.change}
      className="inputField"
    />
  );
};
