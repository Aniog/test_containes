import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout() {
  const location = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
