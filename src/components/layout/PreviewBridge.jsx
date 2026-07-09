import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PreviewBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.replace('#', ''))

        if (element) {
          const headerOffset = 108
          const top = element.getBoundingClientRect().top + window.scrollY - headerOffset

          window.scrollTo({
            top: Math.max(0, top),
            behavior: 'smooth',
          })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname, location.search])

  return null
}

export default PreviewBridge
