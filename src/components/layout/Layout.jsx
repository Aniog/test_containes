import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-text">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
