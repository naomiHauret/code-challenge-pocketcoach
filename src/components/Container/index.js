import React from "react"

const Container = ({ contained, children, staticStyles, ...props }) => (
  <div
    className={`mx-auto w-full ${
      contained === true ? "px-6 lg:px-0 md:max-w-md lg:max-w-lg xl:max-w-xl" : ""
    } ${staticStyles && staticStyles}`}
  >
    {children}
  </div>
)

export default Container
