import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, mainRef.current)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-cream text-espresso font-sans">
      <Navbar />
      <CartDrawer />
      <main ref={mainRef}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
