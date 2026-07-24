import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PreviewRouteBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate

    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    document.documentElement.dataset.route = location.pathname
  }, [location.pathname])

  return null
}

export default PreviewRouteBridge
