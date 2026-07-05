import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/store/Navbar'
import Footer from '@/components/store/Footer'
import CartDrawer from '@/components/store/CartDrawer'
import ScrollManager from '@/components/store/ScrollManager'
import PreviewRouteBridge from '@/components/store/PreviewRouteBridge'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <PreviewRouteBridge />
      <ScrollManager />
      <Navbar isHome={isHome} />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
