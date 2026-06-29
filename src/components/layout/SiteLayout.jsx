import { useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import { useStrkImages } from '@/hooks/useStrkImages'
import { useCart } from '@/hooks/useCart'

const SiteLayout = () => {
  const location = useLocation()
  const containerRef = useRef(null)
  const { items, isCartOpen } = useCart()

  useStrkImages(containerRef, [location.pathname, location.search, items, isCartOpen])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[var(--color-surface)] text-[var(--color-text-primary)]"
    >
      <NavBar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SiteLayout
