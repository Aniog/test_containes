import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import CartDrawer from './CartDrawer.jsx'

function Layout({ children }) {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-screen bg-velmora-ivory text-velmora-ink">
      <Header />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
