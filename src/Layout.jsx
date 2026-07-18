import { Outlet } from 'react-router-dom'
import { NavBar } from '@/components/layout/NavBar'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { Footer } from '@/components/layout/Footer'

function Layout() {
  return (
    <div className="min-h-screen bg-velmora-porcelain text-velmora-ink">
      <NavBar />
      <CartDrawer />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
