import React from "react"
import styles from "./index.module.css"
const TableFrame = (props) => {
  const { header, children } = props
  return (
    <table className={`w-full border-collapse shadow-lg rounded-md overflow-hidden ${styles.frame}`}>
      <thead>
        <tr className="bg-black text-white text-xl ">
          {header.map((label, i) => (
            <th key={i}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody className={`text-blue-900 text-md ${styles.body}`}>{children}</tbody>
    </table>
  )
}

export default TableFrame
