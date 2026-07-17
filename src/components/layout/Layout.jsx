import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import { CartProvider } from '@/context/CartContext'

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])
  return null
}

export default function Layout() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-espresso flex flex-col">
        <Navbar />
        <main className="flex-1 pt-0">
          <Outlet />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
