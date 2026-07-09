import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'

const Layout = () => {
  const location = useLocation()
  const containerRef = useRef(null)
  const { closeCart } = useCart()

  useEffect(() => {
    closeCart()
  }, [closeCart, location.pathname, location.search, location.hash])

  useImageLoader(containerRef, [location.pathname, location.search, location.hash])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-100 text-stone-900">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
