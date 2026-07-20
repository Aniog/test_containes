import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = () => {
  const location = useLocation()
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
