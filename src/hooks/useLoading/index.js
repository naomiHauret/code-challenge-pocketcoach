import { useState, useEffect } from "react"

export function useLoading(duration) {
  const [isLoading, toggleLoading] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => toggleLoading(false), duration)
    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [isLoading])

  return {
    isLoading,
    toggleLoading,
  }
}
