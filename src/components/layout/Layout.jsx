import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
