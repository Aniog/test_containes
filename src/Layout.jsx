import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

const Layout = () => (
  <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
    <SiteHeader />
    <main>
      <Outlet />
    </main>
    <SiteFooter />
    <CartDrawer />
  </div>
)

export default Layout
