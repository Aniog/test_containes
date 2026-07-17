import { Outlet, useLocation } from 'react-router-dom'
import { useRef } from 'react'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function Layout() {
  const appRef = useRef(null)
  const location = useLocation()
  const { isCartOpen, cartCount } = useCart()
  useStrkImages(appRef, [location.pathname, isCartOpen, cartCount])

  return (
    <div ref={appRef} className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
