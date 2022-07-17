import React from 'react'
import Button from './Button'

const PorfileItem = ({ iconBg, iconColor, icon, title, desc }) => {
  return (
    <div className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
            
            <Button bgColor={iconBg} color={iconColor} text={icon} shadow="hover:bg-light-gray" countomclass="text-xl rounded-lg" />

            <div>
              <p className="font-semibold dark:text-gray-200 ">{title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400"> {desc} </p>
            </div>
          </div>
  )
}

export default PorfileItem