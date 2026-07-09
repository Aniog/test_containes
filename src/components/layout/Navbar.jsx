import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, toggleCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/collections', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  const navBg = isHome && !scrolled && !mobileOpen
    ? 'bg-transparent'
    : 'bg-brand-ivory/95 backdrop-blur-md shadow-sm'

  const textColor = isHome && !scrolled && !mobileOpen
    ? 'text-brand-ivory'
    : 'text-brand-charcoal'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        navBg
      )}
    >
      <nav className="section-padding flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn('md:hidden p-2 -ml-2', textColor)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            'font-serif text-2xl md:text-[1.75rem] font-medium tracking-[0.08em] absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0',
            textColor
          )}
        >
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'font-sans text-[0.7rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 hover:opacity-70',
                textColor
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className={cn('flex items-center gap-4', textColor)}>
          <button className="p-2 hover:opacity-70 transition-opacity" aria-label="Search">
            <Search className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={toggleCart}
            className="p-2 hover:opacity-70 transition-opacity relative"
            aria-label="Cart"
          >
            <ShoppingBag className="w-4.5 h-4.5" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-brand-gold text-brand-charcoal text-[0.6rem] font-medium rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-brand-ivory/98 backdrop-blur-md',
          mobileOpen ? 'max-h-80 border-b border-brand-taupe/10' : 'max-h-0'
        )}
      >
        <div className="section-padding py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-sans text-sm font-medium tracking-[0.12em] uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
