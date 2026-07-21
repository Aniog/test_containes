import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CartDrawer from './components/layout/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-cream">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
