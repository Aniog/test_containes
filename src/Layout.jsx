import React from 'react'
import Header from '@/components/common/Header.jsx'
import Footer from '@/components/common/Footer.jsx'
import CartDrawer from '@/components/cart/CartDrawer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  )
}
