import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import NavBar from './NavBar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import strkImgConfig from '@/strk-img-config.json'

function Layout() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <NavBar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
