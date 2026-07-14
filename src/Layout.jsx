import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import { useCart } from '@/context/CartContext'

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const { closeCart } = useCart()

  // Scroll to top + close cart on route change
  useEffect(() => {
    window.scrollTo(0, 0)
    closeCart()
  }, [pathname, closeCart])

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
