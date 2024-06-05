import { useEffect, useState } from "react"

export const useDebounce = (value, milliSeconds) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    })
    console.log(handler)
    return () => {
      clearTimeout()
    }
    
  },[value, milliSeconds])

  return debouncedValue
}


