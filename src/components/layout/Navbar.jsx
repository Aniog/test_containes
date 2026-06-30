import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, count } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navSolid = scrolled || !isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navSolid
            ? 'bg-velmora-surface/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={22}
                className={navSolid ? 'text-velmora-ink' : 'text-white'}
              />
            </button>

            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.18em] uppercase font-medium ${
                navSolid ? 'text-velmora-ink' : 'text-white'
              }`}
            >
              Velmora
            </Link>

            <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`font-sans text-xs uppercase tracking-[0.16em] font-medium hover:text-velmora-accent transition-colors ${
                      navSolid ? 'text-velmora-ink' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                aria-label="Search"
                className={`p-2 hover:text-velmora-accent transition-colors ${
                  navSolid ? 'text-velmora-ink' : 'text-white'
                }`}
              >
                <Search size={20} />
              </button>
              <button
                onClick={toggleCart}
                aria-label={`Cart with ${count} items`}
                className={`p-2 hover:text-velmora-accent transition-colors relative ${
                  navSolid ? 'text-velmora-ink' : 'text-white'
                }`}
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute top-1 right-0.5 w-4 h-4 bg-velmora-accent text-white text-[9px] font-sans font-medium rounded-full flex items-center justify-center">
                    {count > 9 ? '9+' : count}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-velmora-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-velmora-surface shadow-xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-velmora-hairline">
            <span className="font-serif text-xl tracking-[0.18em] uppercase text-velmora-ink">
              Velmora
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-velmora-ink"
            >
              <X size={22} />
            </button>
          </div>
          <ul className="p-6 space-y-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-serif text-2xl text-velmora-ink hover:text-velmora-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}
