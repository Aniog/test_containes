import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import MobileBottomNav from '@/components/layout/MobileBottomNav'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background pb-16 md:pb-0">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  )
}
