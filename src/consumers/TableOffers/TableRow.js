import React, { memo } from "react"
import ButtonLoading from "components/ButtonLoading"

const TableRow = memo(({ bid, date, amount }) => {
  // Memoized component to avoid re-rendering every row of the table everytime the offers variable change

  return (
    <tr>
      <td>{date}</td>
      <td>{bid}</td>
      <td>{amount}</td>
      <td className="md:flex md:justify-end">
        <ButtonLoading />
      </td>
    </tr>
  )
})

export default TableRow
