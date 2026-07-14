import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-velmora-cream text-velmora-ink">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

export default AppLayout
