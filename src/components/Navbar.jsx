import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/shop', label: 'Shop' },
    { to: '/shop?category=earrings', label: 'Collections' },
    { to: '/about', label: 'About' },
    { to: '/journal', label: 'Journal' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-stone-200'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -ml-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-stone-900" />
            ) : (
              <Menu className={cn(
                'w-5 h-5',
                scrolled || !isHome ? 'text-stone-900' : 'text-stone-900'
              )} />
            )}
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className={cn(
              'font-serif text-xl md:text-2xl font-semibold tracking-wide',
              scrolled || !isHome ? 'text-stone-900' : 'text-stone-900'
            )}>
              VELMORA
            </h1>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold',
                  scrolled || !isHome ? 'text-stone-700' : 'text-stone-700'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3">
            <button
              className={cn(
                'p-2 transition-colors hover:text-gold',
                scrolled || !isHome ? 'text-stone-700' : 'text-stone-700'
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className={cn(
                'p-2 relative transition-colors hover:text-gold',
                scrolled || !isHome ? 'text-stone-700' : 'text-stone-700'
              )}
              aria-label="Shopping cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-gold text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-stone-200 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-base font-medium text-stone-700 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
