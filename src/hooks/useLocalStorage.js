import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
  const [storedValue, setstoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setstoredValue(value)
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setLocalStorage]
}
