import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.replace('#', ''))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  return null
}

export default ScrollManager
