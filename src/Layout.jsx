import React from 'react'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header />
      {children}
      <Footer />
      <CartDrawer />
    </div>
  )
}
