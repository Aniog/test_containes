import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function Navbar({ transparent = false }) {
  const { itemCount, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHero = transparent && !scrolled
  const textColor = isHero ? 'text-cream' : 'text-espresso'
  const bgClass = isHero
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-sm shadow-sm'

  const links = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/shop' },
    { label: 'About', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <button
              type="button"
              className={`md:hidden p-2 -ml-2 ${textColor}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.22em] uppercase font-semibold ${textColor}`}
            >
              Velmora
            </Link>

            <ul className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className={`text-xs uppercase tracking-[0.16em] font-medium hover:text-gold transition-colors ${textColor}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className={`flex items-center gap-1 ${textColor}`}>
              <button
                type="button"
                className="p-2 hover:text-gold transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                className="p-2 hover:text-gold transition-colors relative"
                onClick={toggleCart}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-0.5 w-4 h-4 bg-gold text-cream text-[10px] font-semibold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-espresso/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <aside className="w-72 bg-cream h-full shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-[0.22em] uppercase font-semibold text-espresso">
                Velmora
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-espresso" />
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm uppercase tracking-[0.18em] font-medium text-espresso hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  )
}
