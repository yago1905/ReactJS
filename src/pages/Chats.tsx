import React, { FC, useCallback, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Chat, Messages } from '../App';
import { ChatList } from '../components/ChatList';
import { Form } from '../components/Form';
import { MessageList } from '../components/MessageList';
import { AUTHOR } from '../constants';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
}

export const Chats: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: 'Im BOT',
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessage = useCallback(
    (value: string) => {
      if (chatId) {
        setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              author: AUTHOR.USER,
              value,
            },
          ],
        }));
      }
    },
    [chatId]
  );

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <>
      <ChatList chatList={chatList} onAddChat={onAddChat} />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form addMessage={addMessage} />
    </>
  );
};
