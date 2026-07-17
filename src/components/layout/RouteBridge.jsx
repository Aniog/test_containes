import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const RouteBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  React.useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.replace('#', ''))
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0 })
    return undefined
  }, [location.hash, location.pathname, location.search])

  return null
}

export default RouteBridge
