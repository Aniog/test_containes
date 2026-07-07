import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </>
  )
}
