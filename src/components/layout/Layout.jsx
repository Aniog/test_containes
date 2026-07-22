import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-velvet-bg text-velvet-text">
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Outlet />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}