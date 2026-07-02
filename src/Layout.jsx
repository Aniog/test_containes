import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

const Layout = () => {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
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
