import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])
}
