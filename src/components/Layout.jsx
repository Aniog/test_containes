import React from 'react'
import Navigation from './ui/Navigation'
import Footer from './ui/Footer'
import CartDrawer from './ui/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#0D0D0D]">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
