import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PreviewBridge() {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate

    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  return null
}

export default PreviewBridge
