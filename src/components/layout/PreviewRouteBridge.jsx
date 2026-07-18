import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function getPageTitle(pathname) {
  if (pathname.startsWith('/product/')) {
    return 'Product Details | Velmora Fine Jewelry'
  }

  if (pathname === '/shop') {
    return 'Shop | Velmora Fine Jewelry'
  }

  return 'Velmora Fine Jewelry'
}

const PreviewRouteBridge = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (to, options = {}) => {
      navigate(to, options)
    }

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    document.title = getPageTitle(location.pathname)

    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const targetId = decodeURIComponent(location.hash.slice(1))
        const target = document.getElementById(targetId)

        if (target) {
          target.scrollIntoView({ block: 'start', behavior: 'smooth' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  return null
}

export default PreviewRouteBridge
