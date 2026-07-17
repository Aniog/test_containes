import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/ui/CartDrawer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
