import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '@/components/ui/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#0A0806]">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
