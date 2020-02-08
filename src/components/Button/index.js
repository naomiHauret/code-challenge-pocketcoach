import React from "react"

import styles from "./index.module.css"

const Button = (props) => {
  const { children, handleClick, disabled } = props

  return (
    <button
      className={`transition font-sans duration-150 ease-in-out ${styles.button} ${
        disabled
          ? "opacity-25 pointer-events-none cursor-not-allowed "
          : "bg-white text-blue-600 focus:bg-blue-800 focus:border-blue-800 focus:text-white  hover:bg-blue-600 hover:border-blue-600 hover:text-white border-solid border-blue-600 opacity-100 cursor-pointer"
      } rounded-full tracking-wide  py-2 min-w-10 border-solid font-bold `}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
