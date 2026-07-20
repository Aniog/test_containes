import { Outlet } from 'react-router-dom'
import CartDrawer from './components/cart/CartDrawer'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'

export default function Layout() {
  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <SiteHeader />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
