import React from 'react'
import Navigation from './Navigation'
import CartDrawer from './CartDrawer'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5F2ED]">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
