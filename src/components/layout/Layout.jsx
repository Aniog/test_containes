import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CartDrawer from '@/components/layout/CartDrawer'
import ProductImageManifest from '@/components/products/ProductImageManifest'

export default function Layout() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.hash) {
      const isProductAccordionHash =
        location.pathname.startsWith('/product/') &&
        ['#description', '#materials-care', '#shipping-returns'].includes(location.hash)

      const target = document.querySelector(
        isProductAccordionHash ? '#product-details' : location.hash,
      )

      if (target) {
        window.requestAnimationFrame(() => {
          const headerOffset = 112
          const top = Math.max(
            0,
            target.getBoundingClientRect().top + window.scrollY - headerOffset,
          )

          window.scrollTo({ top, behavior: 'smooth' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.hash, location.pathname, location.search])

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <NavBar scrolled={scrolled} />
      <Outlet />
      <Footer />
      <CartDrawer />
      <ProductImageManifest />
    </div>
  )
}
