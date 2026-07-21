import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import CartDrawer from '@/components/shared/CartDrawer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
