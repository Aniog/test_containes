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
  const { totalItems, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const solid = scrolled || !isHome

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-sand py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between relative">
        <button
          className="md:hidden p-2 -ml-2"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu
            size={22}
            className={solid ? 'text-velmora-ink' : 'text-velmora-cream'}
          />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors hover:text-velmora-gold ${
                solid ? 'text-velmora-ink' : 'text-velmora-cream'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className={`absolute left-1/2 -translate-x-1/2 font-serif text-xl md:text-2xl lg:text-3xl tracking-[0.18em] font-medium transition-colors ${
            solid ? 'text-velmora-ink' : 'text-velmora-cream'
          }`}
        >
          VELMORA
        </Link>

        <div className="flex items-center gap-4 md:gap-6 ml-auto">
          <button
            aria-label="Search"
            className={`transition-colors hover:text-velmora-gold ${
              solid ? 'text-velmora-ink' : 'text-velmora-cream'
            }`}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={`relative transition-colors hover:text-velmora-gold ${
              solid ? 'text-velmora-ink' : 'text-velmora-cream'
            }`}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-velmora-cream z-50 flex flex-col transition-transform duration-300 md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-5 border-b border-velmora-sand">
          <span className="font-serif text-2xl tracking-[0.18em]">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} className="text-velmora-ink" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-serif text-2xl text-velmora-ink hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
