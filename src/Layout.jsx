import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import useLoadImages from '@/hooks/useLoadImages'

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)

  useLoadImages(containerRef, [location.pathname, location.search, location.hash])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => navigate(path, options)

    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.querySelector(location.hash)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-parchment text-velmora-ink">
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
