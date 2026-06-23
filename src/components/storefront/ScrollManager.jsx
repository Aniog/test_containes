import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollManager = () => {
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.querySelector(location.hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash, location.search])

  return null
}

export default ScrollManager
