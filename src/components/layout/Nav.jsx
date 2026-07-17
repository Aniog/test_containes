import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On non-home pages, always solid
  const solid = !isHome || scrolled

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${solid ? 'bg-ivory/95 backdrop-blur-sm shadow-sm border-b border-champagne/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className={`font-serif text-xl md:text-2xl tracking-widest2 font-light transition-colors duration-400 ${solid ? 'text-velvet' : 'text-ivory'}`}>
                VELMORA
              </span>
            </Link>

            {/* Center links — desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-sans text-xs tracking-widest uppercase transition-colors duration-300 hover:text-gold ${solid ? 'text-bark' : 'text-champagne'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                className={`p-1 transition-colors duration-300 hover:text-gold ${solid ? 'text-bark' : 'text-champagne'}`}
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                aria-label="Cart"
                onClick={() => setIsOpen(true)}
                className={`p-1 relative transition-colors duration-300 hover:text-gold ${solid ? 'text-bark' : 'text-champagne'}`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-gold text-ivory text-[10px] font-sans font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                aria-label="Menu"
                onClick={() => setMobileOpen(v => !v)}
                className={`md:hidden p-1 transition-colors duration-300 hover:text-gold ${solid ? 'text-bark' : 'text-champagne'}`}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden bg-ivory border-t border-champagne/30 overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-64' : 'max-h-0'}`}>
          <div className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block font-sans text-xs tracking-widest uppercase text-bark hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}
