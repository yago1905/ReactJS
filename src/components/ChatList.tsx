import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chat } from '../App';
import { nanoid } from 'nanoid';

interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat[]) => void;
}

export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      onAddChat([
        ...chatList,
        {
          id: nanoid(),
          name,
        },
      ]);

      setName('');
    }
  };
  return (
    <>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
          </li>
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
