import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import strkImgConfig from '@/strk-img-config.json'

const Layout = () => {
  const containerRef = useRef(null)
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
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const frameId = window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [location.pathname, location.hash])

  useEffect(() => {
    let disconnectImages
    const frameId = window.requestAnimationFrame(() => {
      disconnectImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof disconnectImages === 'function') {
        disconnectImages()
      }
    }
  }, [location.pathname, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream text-velmora-ink">
      <Navbar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
