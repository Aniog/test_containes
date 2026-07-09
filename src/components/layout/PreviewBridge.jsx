import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'

const pageTitles = {
  '/': 'Velmora Fine Jewelry',
  '/shop': 'Shop Velmora Fine Jewelry',
}

export default function PreviewBridge() {
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
    const productMatch = location.pathname.match(/^\/product\/(.+)$/)
    const product = productMatch ? getProductBySlug(productMatch[1]) : null
    const title = product
      ? `${product.name} | Velmora Fine Jewelry`
      : pageTitles[location.pathname] || 'Velmora Fine Jewelry'

    document.title = title

    if (location.hash) {
      const target = document.querySelector(location.hash)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname, location.search, location.hash])

  return null
}
