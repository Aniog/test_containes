import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

function Layout() {
  const containerRef = useRef(null)
  const location = useLocation()
  const { isCartOpen, itemCount } = useCart()

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [location.pathname, location.hash, isCartOpen, itemCount])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.replace('#', ''))

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
