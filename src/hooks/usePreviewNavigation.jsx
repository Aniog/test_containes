import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const usePreviewNavigation = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate

    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === navigate) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
      }
    }
  }, [navigate])
}

export default usePreviewNavigation
