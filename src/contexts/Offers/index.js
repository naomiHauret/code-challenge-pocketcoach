import React, { createContext, useState } from "react"
import { useInterval } from "hooks/useInterval"
import { seed } from "utils/seed"

const offersIncNumber = 10
const offersIncDelay = 5000

export const OffersContext = createContext({})

export const OffersProvider = ({ children }) => {
  const [offers, setOffers] = useState([seed(offersIncNumber)])

  useInterval(() => setOffers((o) => [...o, seed(offersIncNumber)]), offersIncDelay) // start on render

  return <OffersContext.Provider value={{ offers }}>{children}</OffersContext.Provider>
}
