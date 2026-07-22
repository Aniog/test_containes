import React from 'react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CartDrawer from '@/components/shared/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
