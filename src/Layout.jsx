import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Outlet, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx?velmora=20260724'
import Footer from '@/components/layout/Footer.jsx?velmora=20260724'
import Header from '@/components/layout/Header.jsx?velmora=20260724'
import strkImgConfig from '@/strk-img-config.json'

function Layout({ cartItems, cartCount, isCartOpen, onCartOpen, onCartClose, onRemoveFromCart, onUpdateQuantity }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [cartCount, isCartOpen, location.pathname, location.search])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-porcelain text-velmora-espresso">
      <Header cartCount={cartCount} onCartOpen={onCartOpen} />
      <Outlet />
      <Footer />
      <CartDrawer
        isOpen={isCartOpen}
        items={cartItems}
        onClose={onCartClose}
        onRemove={onRemoveFromCart}
        onUpdateQuantity={onUpdateQuantity}
      />
    </div>
  )
}

export default Layout
