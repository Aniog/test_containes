import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import SiteFooter from '@/components/layout/SiteFooter.jsx'
import SiteHeader from '@/components/layout/SiteHeader.jsx'
import { CartProvider } from '@/context/CartContext.jsx'

function LayoutInner() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => navigate(path, options)
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-velmora-pearl text-velmora-ink">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

function StoreLayout() {
  return (
    <CartProvider>
      <LayoutInner />
    </CartProvider>
  )
}

export default StoreLayout
