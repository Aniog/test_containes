import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import SiteHeader from './components/layout/SiteHeader'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'
import strkImgConfig from './strk-img-config.json'

export default function Layout() {
  const containerRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, options)
    }

    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname])

  return (
    <div ref={containerRef} className="page-shell min-h-screen overflow-x-clip">
      <SiteHeader />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
