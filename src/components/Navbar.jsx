import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/collections' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openCart, totalItems } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const solid = scrolled || !isHome

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className={`w-5 h-5 ${solid ? 'text-velmora-dark' : 'text-white'}`} />
            </button>

            {/* Desktop nav left */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 2).map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                    solid ? 'text-velmora-slate hover:text-velmora-gold' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-medium transition-colors duration-300 ${
                solid ? 'text-velmora-dark' : 'text-white'
              }`}
            >
              VELMORA
            </Link>

            {/* Desktop nav right + icons */}
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex items-center gap-8">
                {navLinks.slice(2).map(link => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                      solid ? 'text-velmora-slate hover:text-velmora-gold' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <button
                className={`p-2 transition-colors duration-300 ${
                  solid ? 'text-velmora-slate hover:text-velmora-gold' : 'text-white/90 hover:text-white'
                }`}
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={openCart}
                className={`relative p-2 transition-colors duration-300 ${
                  solid ? 'text-velmora-slate hover:text-velmora-gold' : 'text-white/90 hover:text-white'
                }`}
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-white p-6 animate-slide-in-right">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-lg tracking-[0.2em] text-velmora-dark">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-velmora-slate" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm uppercase tracking-[0.15em] text-velmora-slate hover:text-velmora-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}