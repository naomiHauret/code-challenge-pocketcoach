import React from "react"
import Button from "components/Button"
import { useLoading } from "hooks/useLoading"

const ButtonTimeout = () => {
  const { isLoading, toggleLoading } = useLoading(2000)

  return (
    <Button
      disabled={isLoading}
      handleClick={() => {
        toggleLoading(true)
      }}
    >
      {isLoading ? "Loading" : "Update"}
    </Button>
  )
}
export default ButtonTimeout
