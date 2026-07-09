import { useState, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import CartDrawer from './CartDrawer'
import Footer from './Footer'

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false)

  const openCart = useCallback(() => setCartOpen(true), [])
  const closeCart = useCallback(() => setCartOpen(false), [])

  return (
    <div className="min-h-screen bg-cream-50 text-cream-900 font-sans">
      <Navbar onCartOpen={openCart} />
      <CartDrawer open={cartOpen} onClose={closeCart} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}