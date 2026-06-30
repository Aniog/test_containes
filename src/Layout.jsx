import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import Toaster from '@/components/ui/Toaster'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <Toaster />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
