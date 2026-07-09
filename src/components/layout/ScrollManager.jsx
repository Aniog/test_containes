import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ScrollManager() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: Boolean(options.replace) })
    }
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.querySelector(location.hash)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => window.cancelAnimationFrame(frameId)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return null
}
