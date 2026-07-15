import { Outlet } from 'react-router-dom'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-parchment text-espresso">
      <SiteHeader />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
