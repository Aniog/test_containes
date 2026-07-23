import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-warmCream">
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
