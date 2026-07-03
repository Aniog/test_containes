import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const HEADER_OFFSET = 112

function scrollToHash(hash) {
  const id = hash.replace('#', '')
  const target = document.getElementById(id)

  if (!target) {
    return false
  }

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' })

  return true
}

export default function PreviewNavigationBridge() {
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
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        if (scrollToHash(location.hash)) {
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.hash, location.pathname])

  return null
}
