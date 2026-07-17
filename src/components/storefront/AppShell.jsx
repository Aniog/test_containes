import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../../src/strk-img-config.json'
import { Navbar } from './Navbar'
import { CartDrawer } from './CartDrawer'
import { Footer } from './Footer'

export function AppShell() {
  const containerRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === navigate) {
        window.__STRIKINGLY_PREVIEW_NAVIGATE__ = null
      }
    }
  }, [navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
