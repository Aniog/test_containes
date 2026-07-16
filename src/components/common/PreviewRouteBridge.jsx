import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PreviewRouteBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return null
}

export default PreviewRouteBridge
