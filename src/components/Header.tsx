import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
];

export const Header: FC = () => (
  <header>
    <ul
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        listStyleType: 'none',
      }}
    >
      {navigate.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.to}
            style={({ isActive }) => ({
              color: isActive ? 'green' : 'blue',
              textDecoration: 'none',
            })}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>

    <main>
      <Outlet />
    </main>
  </header>
);
