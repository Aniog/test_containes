import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PREVIEW_NAVIGATE_KEY = '__STRIKINGLY_PREVIEW_NAVIGATE__'

const PreviewRouteBridge = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window[PREVIEW_NAVIGATE_KEY] = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      delete window[PREVIEW_NAVIGATE_KEY]
    }
  }, [navigate])

  return null
}

export default PreviewRouteBridge
