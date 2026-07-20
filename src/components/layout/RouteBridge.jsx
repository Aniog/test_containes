import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function RouteBridge() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.dispatchEvent(new Event('velmora-route-change'))
  }, [location.pathname, location.search])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}
