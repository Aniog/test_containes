import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { totalItems } = useCart()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const stopScroll = useCallback((e) => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    stopScroll()
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen, stopScroll])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-cream-200'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -ml-2 text-cream-700 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-widest transition-colors',
                scrolled || !isHome ? 'text-cream-900' : 'text-white'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-xs uppercase tracking-wider font-medium transition-colors duration-300 hover:text-gold',
                    scrolled || !isHome ? 'text-cream-700' : 'text-white/90'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button
                className={cn(
                  'p-2 transition-colors',
                  scrolled || !isHome ? 'text-cream-700 hover:text-gold' : 'text-white/90 hover:text-white'
                )}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={onCartOpen}
                className={cn(
                  'p-2 relative transition-colors',
                  scrolled || !isHome ? 'text-cream-700 hover:text-gold' : 'text-white/90 hover:text-white'
                )}
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] font-medium w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden',
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 z-50 w-72 bg-white transform transition-transform duration-300 ease-out md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm uppercase tracking-wider text-cream-700 hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-cream-200 my-2" />
            <Link to="/" className="text-sm uppercase tracking-wider text-cream-700 hover:text-gold transition-colors">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}