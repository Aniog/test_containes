import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import CartDrawer from '@/components/cart/CartDrawer.jsx'
import Footer from '@/components/layout/Footer.jsx'
import Header from '@/components/layout/Header.jsx'

export default function Layout() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
        return
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname])

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <CartDrawer />
    </>
  )
}
