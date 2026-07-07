import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from '@/components/cart/CartDrawer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-espresso">
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
