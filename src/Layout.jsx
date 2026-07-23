import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <CartDrawer />
    </div>
  )
}
