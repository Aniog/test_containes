import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { getCartCount } from '@/lib/cart'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Layout({ children, cartItems, cartOpen, onCartOpen, onCartClose, onRemoveFromCart, onQuantityChange }) {
  const location = useLocation()
  const cartCount = getCartCount(cartItems)
  const containerRef = useImageLoader([location.pathname, location.search, location.hash, cartOpen, cartItems.length])

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header cartCount={cartCount} onCartOpen={onCartOpen} />
      {children}
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={onCartClose}
        onRemove={onRemoveFromCart}
        onQuantityChange={onQuantityChange}
      />
    </div>
  )
}
