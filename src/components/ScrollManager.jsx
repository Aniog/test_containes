import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [location.hash, location.pathname])

  return null
}

export default ScrollManager
