import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/cart/CartDrawer'

const Layout = ({ children }) => {
  const location = useLocation()

  useEffect(() => {
    let outerFrame = 0
    let innerFrame = 0

    if (location.hash) {
      outerFrame = window.requestAnimationFrame(() => {
        innerFrame = window.requestAnimationFrame(() => {
          const element = document.querySelector(location.hash)

          if (!element) {
            return
          }

          const top = element.getBoundingClientRect().top + window.scrollY - 112
          window.scrollTo({ top, behavior: 'smooth' })
        })
      })

      return () => {
        window.cancelAnimationFrame(outerFrame)
        window.cancelAnimationFrame(innerFrame)
      }
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.search, location.hash])

  return (
    <div className="min-h-screen bg-stone-50 text-neutral-950">
      <Header />
      <main>{children}</main>
      <Footer />
      <CartDrawer />
    </div>
  )
}

export default Layout
