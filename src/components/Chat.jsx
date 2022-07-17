import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import Message from './Message';

const Chat = () => {
  const { handleClick, currentColor } = useStateContext()

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 drop-shadow-md">
      <div className="flex justify-between items-center border-b-1 border-color">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button type="button" className="text-white text-xs rounded p-1 px-2" style={{ background : 'orange' }}>
            5 New
          </button>
        </div>
        <button type='button' onClick={()=> handleClick('chat', false) } className="text-xl rounded-full p-3 hover:bg-light-gray block">
              <MdOutlineCancel />
          </button>
      </div>
      <div className="mt-5 ">
        {chatData?.map((item, index) => (
          <Message key={index} {...item} />
        ))}
        <div className="mt-5 flex justify-center">
          <Button
            color="white"
            bgColor={currentColor}
            text="See all messages"
            borderRadius="10px"
            width="full"
            customclass="px-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;