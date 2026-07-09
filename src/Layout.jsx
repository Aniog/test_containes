import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'

function Layout() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
