import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import CartDrawer from './CartDrawer'

const AppLayout = () => (
  <div className="min-h-screen bg-cream-50 text-velvet-900">
    <SiteHeader />
    <Outlet />
    <SiteFooter />
    <CartDrawer />
  </div>
)

export default AppLayout
