import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const RouteEffects = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.replace('#', ''))
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    return undefined
  }, [location.hash, location.pathname, location.search])

  return null
}

export default RouteEffects
