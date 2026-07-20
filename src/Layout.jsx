import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'
import ScrollManager from '@/components/layout/ScrollManager'

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <ScrollManager />
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
