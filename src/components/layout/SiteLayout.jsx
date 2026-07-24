import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import CartDrawer from '../cart/CartDrawer'

const SiteLayout = () => (
  <div className="min-h-screen bg-stone-950 text-stone-50">
    <SiteHeader />
    <main>
      <Outlet />
    </main>
    <SiteFooter />
    <CartDrawer />
  </div>
)

export default SiteLayout
