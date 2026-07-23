import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
