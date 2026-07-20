import { Outlet } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </>
  )
}
