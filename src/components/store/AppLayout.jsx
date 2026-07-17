import { Outlet } from 'react-router-dom'
import Navbar from '@/components/store/Navbar'
import CartDrawer from '@/components/store/CartDrawer'
import Footer from '@/components/store/Footer'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Navbar />
      <CartDrawer />
      <Outlet />
      <Footer />
    </div>
  )
}
