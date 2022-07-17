import React from 'react'
import Button from './Button'

const Card = ({ title, iconColor, iconBg, icon, amount, pcColor, percentage  }) => {
  return (
    <div
      key={title}
      className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72 w-[45%] p-4 pt-9 rounded-2xl text-center"
    >
      <Button
        text={icon}
        color={iconColor}
        bgColor={iconBg}
        shadow="hover:drop-shadow-xl"
        customclass="text-2xl opacity-0.9 rounded-full p-4"
      />

      <div>
        <p className='mt-3'>
            <span className='text-lg font-semibold'>
              {amount}
            </span>
            <span className={`text-sm text-${pcColor} ml-2`}>
              {percentage}
            </span>
        </p>
        <p className='text-am text-gray-400 mt-1'>{title}</p>
      </div>
    </div>
  )
}

export default Card