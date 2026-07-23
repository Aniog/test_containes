import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from './components/layout/SiteFooter.jsx'
import SiteHeader from './components/layout/SiteHeader.jsx'
import CartDrawer from './components/store/CartDrawer.jsx'

const Layout = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const frameId = window.requestAnimationFrame(() => {
        const section = document.getElementById(location.hash.slice(1))
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })

      return () => window.cancelAnimationFrame(frameId)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    return undefined
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-porcelain text-obsidian">
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <CartDrawer />
    </div>
  )
}

export default Layout
