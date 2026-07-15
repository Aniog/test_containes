import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const SiteLayout = () => (
  <div className="min-h-screen bg-stone-50 text-stone-900">
    <Header />
    <Outlet />
    <Footer />
    <CartDrawer />
  </div>
)

export default SiteLayout
