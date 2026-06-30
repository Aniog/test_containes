import { Outlet } from 'react-router-dom'
import Navbar from '@/components/shared/Navbar'
import CartDrawer from '@/components/shared/CartDrawer'
import Footer from '@/components/shared/Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-velmora-base text-velmora-ivory">
      <Navbar />
      <CartDrawer />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
