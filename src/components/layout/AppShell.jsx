import { useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import Navbar from '@/components/layout/Navbar.jsx?nav=v7'
import Footer from '@/components/layout/Footer.jsx?footer=v4'
import CartDrawer from '@/components/layout/CartDrawer.jsx?cart=v6'
import { useCart } from '@/context/CartContext'
import strkImgConfig from '@/strk-img-config.json'

const AppShell = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const { isCartOpen, cartItems } = useCart()
  const isHomePage = location.pathname === '/'
  const mainClassName = isHomePage ? 'pt-0' : 'pt-24'

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate
    return () => {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = undefined
    }
  }, [navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (location.hash) {
        const targetId = location.hash.replace('#', '')
        const target = document.getElementById(targetId)

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'smooth' })
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.hash, location.search])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [location.pathname, location.search, isCartOpen, cartItems.length])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Navbar />
      <main className={mainClassName} data-layout-home={String(isHomePage)}>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default AppShell
