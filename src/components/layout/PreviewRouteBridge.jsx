import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function PreviewRouteBridge() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        document
          .getElementById(location.hash.replace('#', ''))
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    return undefined
  }, [location.pathname, location.hash])

  return null
}
