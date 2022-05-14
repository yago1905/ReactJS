import React, { FC, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from '../utils/ThemeContext';
import { changeName, toggleProfile } from 'src/store/profile/actions';
import { ProfileState } from 'src/store/profile/reducer';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector((state: ProfileState) => state.visible);
  const name = useSelector((state: ProfileState) => state.name);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'light' ? '🌞' : '🌙'}</p>
        <button onClick={toggleTheme}>Change theme</button>
      </div>
      <hr />
      <div>
        <p>{name}</p>
        <input type="checkbox" checked={visible} />
        <button onClick={() => dispatch(toggleProfile())}>Change</button>

        <br />

        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
