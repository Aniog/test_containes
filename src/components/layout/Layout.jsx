import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/cart/CartDrawer.jsx'

export default function Layout({ children, cartItems, cartCount, onCartOpen, cartOpen, onCartClose, onRemove, onQuantityChange }) {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <NavBar cartCount={cartCount} onCartOpen={onCartOpen} />
      {children}
      <Footer />
      <CartDrawer open={cartOpen} items={cartItems} onClose={onCartClose} onRemove={onRemove} onQuantityChange={onQuantityChange} />
    </div>
  )
}
