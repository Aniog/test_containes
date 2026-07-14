import { Outlet } from 'react-router-dom'
import { CartDrawer } from './cart-drawer.jsx'
import { SiteHeader } from './site-header.jsx'
import { SiteFooter } from './site-footer.jsx'

export function StorefrontLayout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
