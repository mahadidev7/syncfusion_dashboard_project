import React from 'react'

const Button = ({bgColor, text, color, size, borderRadius, customclass, shadow="hover:drop-shadow-xl" }) => {
  return (
    <button
      type='button'
      style={{ backgroundColor:bgColor, color, borderRadius}}
      className={`text-${size} p-3 ${shadow} ${customclass}`}
    >
      {text}
    </button>
  )
}

export default Button