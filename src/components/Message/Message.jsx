import React from 'react';
import './styles/Message.css';

export const Message = (props) => {
  return <div className="message">{props.message}</div>;
};
