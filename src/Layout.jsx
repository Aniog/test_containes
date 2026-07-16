import React from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import CartDrawer from './components/cart/CartDrawer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
