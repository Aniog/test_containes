import { Outlet } from 'react-router-dom'
import Navigation from '@/components/layout/Navigation'
import CartDrawer from '@/components/layout/CartDrawer'
import Footer from '@/components/layout/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Navigation />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
