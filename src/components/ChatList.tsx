// import React, { FC, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ListItem } from '@mui/material';

// // import { Chat } from '../App';
// // import { nanoid } from 'nanoid';

// import { useDispatch, useSelector } from 'react-redux';
// import { addChat, deleteChat } from 'src/store/chats/actions';
// import { selectChatList } from 'src/store/chats/selectors';

// import { style } from './Chat.module.scss';

// interface ChatListProps {
//   chatList: Chat[];
//   onAddChat: (chats: Chat) => void;
//   onDeleteChat: (chat: string) => void;
// }

// export const ChatList: FC<ChatListProps> = ({
//   chatList,
//   onAddChat,
//   onDeleteChat,
// }) => {
//   const [name, setName] = useState('');
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (name) {
//       onAddChat({
//         id: nanoid(),
//         name,
//       });

//       setName('');
//     }
//   };
//   return (
//     <>
//       <ul>
//         {chatList.map((chat) => (
//           <ListItem key={chat.id}>
//             <Link className={style.title} to={`/chats/${chat.name}`}>
//               {chat.name}
//             </Link>
//             <button
//               className={style.delete}
//               onClick={() => onDeleteChat(chat.name)}
//             >
//               X
//             </button>
//           </ListItem>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="submit">add chat</button>
//       </form>
//     </>
//   );
// };

import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/chats/actions';
import { selectChatList } from 'src/store/chats/selectors';

import style from './Chat.module.scss';

export const ChatList: FC = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
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
              onClick={() => dispatch(deleteChat(chat.name))}
            >
              x
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
