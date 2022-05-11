import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chat } from '../App';
import { nanoid } from 'nanoid';
import { ListItem } from '@mui/material';
import style from './Chat.module.scss';

interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chat: string) => void;
}

export const ChatList: FC<ChatListProps> = ({
  chatList,
  onAddChat,
  onDeleteChat,
}) => {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });

      setName('');
    }
  };
  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <ListItem key={chat.id}>
            <Link className={style.title} to={`/chats/${chat.name}`}>
              {chat.name}
            </Link>
            <button
              className={style.delete}
              onClick={() => onDeleteChat(chat.name)}
            >
              X
            </button>
          </ListItem>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">add chat</button>
      </form>
    </>
  );
};
