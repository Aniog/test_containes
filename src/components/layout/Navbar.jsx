import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const atTop = isHome && !scrolled
  const textColor = atTop ? 'text-cream' : 'text-espresso'
  const bgClass = atTop
    ? 'bg-transparent'
    : 'bg-cream/95 backdrop-blur-md border-b border-warm-gray'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${bgClass}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.18em] font-medium ${textColor} transition-colors duration-300`}
            >
              VELMORA
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-xs font-sans uppercase tracking-ui ${textColor} hover:text-gold transition-colors duration-300`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 md:gap-5">
              <button
                type="button"
                aria-label="Search"
                className={`p-1 ${textColor} hover:text-gold transition-colors duration-300`}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Cart with ${itemCount} items`}
                className={`relative p-1 ${textColor} hover:text-gold transition-colors duration-300`}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-cream text-[10px] font-medium flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`md:hidden p-1 ${textColor} hover:text-gold transition-colors duration-300`}
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 transform transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 h-full w-[280px] bg-cream p-6 flex flex-col">
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-lg tracking-[0.18em]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-1 text-espresso"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-sans uppercase tracking-ui text-espresso hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
