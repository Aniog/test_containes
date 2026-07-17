import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-ivory text-velvet">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

export default SiteLayout
