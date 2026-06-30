import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CartDrawer from './components/cart/CartDrawer.jsx'
import SiteFooter from './components/layout/SiteFooter.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import ProductImageManifest from './components/products/ProductImageManifest.jsx'
import { useStrkImages } from './hooks/useStrkImages.js'

export default function Layout() {
  const location = useLocation()
  const containerRef = useStrkImages([location.pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-stone-950 text-stone-100">
      <ProductImageManifest />
      <SiteHeader pathname={location.pathname} />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
