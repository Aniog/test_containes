import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Navbar />
      <CartDrawer />
      <div className="flex-1">
        <Outlet />
      </div>
      {!isHome && <Footer />}
    </div>
  )
}
