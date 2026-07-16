import { Outlet } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar.jsx'
import CartDrawer from '@/components/layout/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'

const Layout = () => {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <NavBar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
