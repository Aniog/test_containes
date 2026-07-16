import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import RouteEffects from '@/components/layout/RouteEffects'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-ivory text-stone-900">
      <RouteEffects />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
