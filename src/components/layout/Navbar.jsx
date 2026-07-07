import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isTransparent = isHome && !scrolled && !mobileMenuOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
          isTransparent
            ? 'bg-transparent text-velmora-cream'
            : 'bg-velmora-cream/95 text-velmora-dark shadow-sm backdrop-blur-sm'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Logo */}
            <Link to="/" className="font-serif text-2xl md:text-3xl tracking-wider uppercase">
              Velmora
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                type="button"
                className="p-2 hover:text-velmora-gold transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 hover:text-velmora-gold transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 flex items-center justify-center bg-velmora-gold text-velmora-dark text-[10px] font-semibold rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-velmora-cream transition-transform duration-300 md:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between h-16 px-5 border-b border-velmora-sand">
          <span className="font-serif text-2xl tracking-wider uppercase">Velmora</span>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-3xl text-velmora-dark hover:text-velmora-gold transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
