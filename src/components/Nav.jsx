import { useState, useEffect } from 'react'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-velvet/95 backdrop-blur-md border-b border-velvet-400/40 shadow-lg shadow-black/10'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-velvet-50 hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link to="/" className="font-serif text-2xl md:text-3xl tracking-[0.15em] text-velvet-50 hover:text-gold transition-colors">
          VELMORA
        </Link>

        {/* Center links - desktop */}
        <div className="hidden lg:flex items-center gap-10">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/collections', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm uppercase tracking-[0.15em] text-velvet-50/80 hover:text-gold transition-colors duration-300',
                location.pathname === link.to && 'text-gold'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-5">
          <button className="text-velvet-50/80 hover:text-gold transition-colors" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <button
            className="text-velvet-50/80 hover:text-gold transition-colors relative"
            onClick={openCart}
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-velvet text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-20 bg-velvet/98 backdrop-blur-lg transition-all duration-300 z-40',
          mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          {[
            { to: '/shop', label: 'Shop' },
            { to: '/collections', label: 'Collections' },
            { to: '/about', label: 'About' },
            { to: '/journal', label: 'Journal' },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-lg uppercase tracking-[0.2em] text-velvet-50/80 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}