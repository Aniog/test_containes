import React from 'react'
import { Outlet } from 'react-router-dom'
import CartDrawer from './components/CartDrawer'
import Footer from './components/Footer'
import Header from './components/Header'

function Layout() {
  return (
    <div className="bg-stone-100 text-stone-900">
      <Header />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
