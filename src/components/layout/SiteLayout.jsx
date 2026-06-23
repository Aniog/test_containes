import { Outlet } from 'react-router-dom'
import SiteHeader from '@/components/layout/SiteHeader.jsx'
import Footer from '@/components/layout/Footer.jsx'
import CartDrawer from '@/components/cart/CartDrawer.jsx'

const SiteLayout = () => {
  return (
    <div className="bg-base text-foreground">
      <SiteHeader />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default SiteLayout
