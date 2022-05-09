import React, { FC } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  disabled: boolean;
  onButtonClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ disabled, onButtonClick }) => (
  <button
    // variant="contained"
    type="submit"
    disabled={disabled}
    onClick={onButtonClick}
    className={style.button}
  >
    click
  </button>
);
