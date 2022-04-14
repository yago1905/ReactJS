import React, { useState } from 'react';
import './styles/Form.css';
import { Message } from './Message';
import { Input } from './Input';
import { Button } from './Button';

export const Form = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('Новое сообщение');

  const handleClick = () => {
    setMessage(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="form">
      <Message message={message} />
      <Input value={value} change={handleChange} />
      <br />
      <Button click={handleClick} />
    </div>
  );
};
