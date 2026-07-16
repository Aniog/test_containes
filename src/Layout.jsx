import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'
import CartDrawer from '@/components/ui/CartDrawer'
import Footer from '@/components/ui/Footer'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      <CartDrawer />
      <main className={`flex-1 ${isHome ? '' : ''}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}