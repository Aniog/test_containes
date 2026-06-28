import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PreviewNavigationBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    console.log('Route changed', location.pathname)
  }, [location.pathname])

  return null
}

export default PreviewNavigationBridge
