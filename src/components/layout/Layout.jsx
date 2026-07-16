import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import CartDrawer from '@/components/store/CartDrawer'
import { useStrkImageLoader } from '@/lib/useStrkImageLoader'

export default function Layout() {
  const location = useLocation()
  const containerRef = useStrkImageLoader([location.pathname])

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
