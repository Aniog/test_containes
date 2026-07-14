import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from './components/layout/SiteHeader.jsx'
import Footer from './components/layout/Footer.jsx'
import CartDrawer from './components/cart/CartDrawer.jsx'

const Layout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <SiteHeader />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
