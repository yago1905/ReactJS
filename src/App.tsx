import React, { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { ChatList } from './components/ChatList';
import { Header } from './components/Header';
import { AUTHOR } from './constants';
import { Chats } from './pages/Chats';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { nanoid } from 'nanoid';

export interface Chat {
  id: string;
  name: string;
}

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      author: AUTHOR.USER,
      value: 'Hello geekbrains',
    },
  ],
};
export interface Message {
  id: string;
  author: string;
  value: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessage);

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    setMessages({
      ...messages,
      [chat.name]: [],
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route
              index
              element={<ChatList chatList={chatList} onAddChat={onAddChat} />}
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  chatList={chatList}
                  onAddChat={onAddChat}
                />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
