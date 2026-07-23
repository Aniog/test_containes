import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-warm-cream">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
