import { Outlet } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'

export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-dark)]">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
