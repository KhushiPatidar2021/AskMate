import React from 'react'

const Button = ({className, text, onClick}) => {
  return (
    <div>

   <button className={` px-4 py-2 rounded ${className} text-white font-bold cursor-pointer `} onClick={onClick}>{text}</button>

    </div>
  )
}

export default Button