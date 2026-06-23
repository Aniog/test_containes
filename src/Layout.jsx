import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/layout/CartDrawer'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

function ScrollBehavior() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.querySelector(location.hash)

        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.hash, location.pathname])

  return null
}

function Layout() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <ScrollBehavior />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

export default Layout
