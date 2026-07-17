import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function StorefrontLayout() {
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-ink">
      <Header onCartOpen={() => setCartOpen(true)} />
      <Outlet context={{ openCart: () => setCartOpen(true) }} />
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  )
}
