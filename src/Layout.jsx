import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteHeader from '@/components/layout/SiteHeader.jsx'
import SiteFooter from '@/components/layout/SiteFooter.jsx'
import CartDrawer from '@/components/cart/CartDrawer.jsx'

export default function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <SiteHeader />
      <main className={isHome ? '' : 'pt-24'}>
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}
