import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

const Layout = () => {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteHeader />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout
