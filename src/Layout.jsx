import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

export default function Layout() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <Outlet />
      <Footer />
    </>
  )
}