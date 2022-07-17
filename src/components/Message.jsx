import React from 'react'

const Message = ({image, desc, message, time, dotColor}) => {
  return (
    <div className="flex items-center gap-5 border-b-1 border-color p-3 leading-8 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
        <div className="relative">
            <img
            className="rounded-full h-10 w-10"
            src={image ? image : ''}
            alt={message ? message : ''}
            />
            <span
            style={{ background: dotColor ? dotColor : '' }}
            className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
            />
        </div>
        <div>
            <p className="font-semibold dark:text-gray-200 ">{message ? message : ''}</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{desc ? desc : ''}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{time ? time : ''}</p>
        </div>
    </div>
  )
}

export default Message