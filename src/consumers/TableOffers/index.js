import React, { useContext } from "react"
import { OffersContext } from "contexts/Offers"
import TableFrame from "components/TableFrame"
import TableRow from "./TableRow"
import { formatDatetime } from "utils/datetime"

const TableBody = () => {
  const { offers } = useContext(OffersContext)
  return offers.map((offer) =>
    Object.values(offer).map((o) => (
      <TableRow key={o.bid} bid={o.bid} date={formatDatetime(o.date)} amount={o.amount} />
    )),
  )
}

const TableOffers = () => {
  return (
    <TableFrame header={["Date", "Bid", "Amount", ""]}>
      <TableBody />
    </TableFrame>
  )
}

export default TableOffers
