import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return null
}

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-porcelain">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
      <CartDrawer />
    </div>
  )
}
