import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import { getCartCount } from '@/lib/cart'
import strkImgConfig from '@/strk-img-config.json'

export default function Layout({ cartItems, cartOpen, onCartOpen, onCartClose, onUpdateQuantity, onRemove }) {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, cartOpen])

  return (
    <div ref={containerRef} className="min-h-screen bg-porcelain text-obsidian">
      <Nav cartCount={getCartCount(cartItems)} onCartOpen={onCartOpen} />
      <Outlet />
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={onCartClose}
        onUpdateQuantity={onUpdateQuantity}
        onRemove={onRemove}
      />
    </div>
  )
}
