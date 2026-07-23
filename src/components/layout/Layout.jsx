import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'

export default function Layout({ children }) {
  const mainRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    if (mainRef.current) {
      return ImageHelper.loadImages(strkImgConfig, mainRef.current)
    }
  }, [location.pathname, children])

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-cream font-sans">
      <Navbar />
      <CartDrawer />
      <main ref={mainRef}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
