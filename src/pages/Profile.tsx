import React, { FC, useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'light' ? '🌞' : '🌙'}</p>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </>
  );
};
