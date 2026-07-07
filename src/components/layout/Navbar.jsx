import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/lib/CartContext'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navBg = scrolled || !isHome
    ? 'bg-cream/95 backdrop-blur-md border-b border-muted-light shadow-sm'
    : 'bg-transparent'

  const textColor = scrolled || !isHome ? 'text-charcoal' : 'text-white'

  return (
    <header className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', navBg)}>
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className={cn('font-serif text-2xl md:text-3xl tracking-wide', textColor)}>
          VELMORA
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/shop?category=earrings', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map(link => (
            <Link
              key={link.label}
              to={link.to}
              className={cn(
                'text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-accent',
                textColor
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className={cn('transition-colors hover:text-accent', textColor)} aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className={cn('relative transition-colors hover:text-accent', textColor)}
            onClick={() => setIsOpen(true)}
            aria-label="Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          <button
            className={cn('md:hidden transition-colors hover:text-accent', textColor)}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-muted-light">
          <div className="px-4 py-6 flex flex-col gap-4">
            {[
              { to: '/shop', label: 'Shop' },
              { to: '/shop?category=earrings', label: 'Collections' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(link => (
              <Link
                key={link.label}
                to={link.to}
                className="text-charcoal text-sm uppercase tracking-widest font-medium py-2 border-b border-muted-light hover:text-accent transition-colors"
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
