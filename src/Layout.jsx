import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { CartDrawer } from './components/layout/CartDrawer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <CartDrawer />
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
