import React from "react"
import Container from "components/Container"
import TableOffers from "consumers/TableOffers"
import { OffersProvider } from "contexts/Offers"
import { hot } from "react-hot-loader/root"

const App = () => (
  <Container staticStyles="my-10" contained={true}>
    <OffersProvider>
      <TableOffers />
    </OffersProvider>
  </Container>
)

export default hot(App)
