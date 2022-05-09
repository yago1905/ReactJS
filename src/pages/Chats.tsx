import { nanoid } from 'nanoid';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Chat } from '../App';
import { ChatList } from '../components/ChatList';
import { Form } from '../components/Form';
import { MessageList } from '../components/MessageList';
import { AUTHOR } from '../constants';

interface Message {
  id: string;
  author: string;
  value: string;
}

interface ChatsProps {
  chatList: Chat[];
  onAddChat: (chats: Chat[]) => void;
}

export const Chats: FC<ChatsProps> = ({ chatList, onAddChat }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: nanoid(),
            author: AUTHOR.BOT,
            value: 'Im BOT',
          },
        ]);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = useCallback((value: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author: AUTHOR.USER,
        value,
      },
    ]);
  }, []);

  return (
    <>
      <ChatList chatList={chatList} onAddChat={onAddChat} />
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </>
  );
};
