import { useState, useEffect } from 'react'

export function useNearScreen (elementRef) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      window.IntersectionObserver
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        // lazy loading
        // console.log(elementRef.current)
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            console.log('si se renderizo article')
            setShow(true)
            observer.disconnect()
          }
          console.log('isIntersecing', isIntersecting)
          // console.log('entries ?? ', entries)
        })
        observer.observe(elementRef.current)
      })
  }, [elementRef])
  return show
}
