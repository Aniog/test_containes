import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
