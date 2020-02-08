import { useEffect } from "react"

export function useInterval(func, duration) {
  useEffect(() => {
    const interval = setInterval(() => func(), duration)
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [])
}
