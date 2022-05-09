import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { ChatList } from './components/ChatList';
import { Header } from './components/Header';
import { Chats } from './pages/Chats';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export interface Chat {
  id: string;
  name: string;
}

const initialChats: Chat[] = [
  {
    id: '1',
    name: 'chat',
  },
];

export const App: FC = () => {
  const [chatList, setChatList] = useState<Chat[]>(initialChats);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route
              index
              element={<ChatList chatList={chatList} onAddChat={setChatList} />}
            />
            <Route
              path=":chatId"
              element={<Chats chatList={chatList} onAddChat={setChatList} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
