import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import CartDrawer from '@/components/layout/cart-drawer'
import Toast from '@/components/layout/toast'
import { CartProvider } from '@/lib/cart'

function ScrollToTop() {
  const { pathname, search } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, search])
  return null
}

export default function Layout() {
  const containerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [pathname])

  return (
    <CartProvider>
      <ScrollToTop />
      <div ref={containerRef} className="flex min-h-screen flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
        <Toast />
      </div>
    </CartProvider>
  )
}
