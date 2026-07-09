import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'

const Layout = () => (
  <div className="min-h-screen bg-ivory text-espresso">
    <Header />
    <Outlet />
    <Footer />
    <CartDrawer />
  </div>
)

export default Layout
