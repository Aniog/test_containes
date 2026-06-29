import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from '@/components/ui/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-warm-black">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
