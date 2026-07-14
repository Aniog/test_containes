import { useRef } from 'react'
import { Outlet } from 'react-router-dom'
import { useCart } from '@/context/CartContext.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'
import { CartDrawer } from './cart-drawer.jsx'
import { SiteHeader } from './site-header.jsx'
import { SiteFooter } from './site-footer.jsx'

export function StorefrontLayout() {
  const { isCartOpen, itemCount } = useCart()
  const layoutRef = useRef(null)

  useStrkImages(layoutRef, [isCartOpen, itemCount])

  return (
    <div ref={layoutRef} className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
