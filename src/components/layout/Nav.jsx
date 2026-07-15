import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, setIsOpen } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const transparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-500 ease-luxury',
          transparent
            ? 'bg-transparent'
            : 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-velvet-100'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-xl md:text-2xl font-light tracking-widest2 transition-colors duration-300',
                transparent ? 'text-cream' : 'text-obsidian-800'
              )}
            >
              VELMORA
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'font-sans text-xs uppercase tracking-widest transition-colors duration-200 hover:text-velvet-500',
                    transparent ? 'text-cream/90' : 'text-obsidian-600'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                className={cn(
                  'p-2 transition-colors duration-200 hover:text-velvet-500',
                  transparent ? 'text-cream/90' : 'text-obsidian-600'
                )}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => setIsOpen(true)}
                className={cn(
                  'p-2 relative transition-colors duration-200 hover:text-velvet-500',
                  transparent ? 'text-cream/90' : 'text-obsidian-600'
                )}
                aria-label="Cart"
              >
                <ShoppingBag size={18} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-velvet-500 text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                    {count}
                  </span>
                )}
              </button>
              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(o => !o)}
                className={cn(
                  'md:hidden p-2 transition-colors duration-200',
                  transparent ? 'text-cream/90' : 'text-obsidian-600'
                )}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-velvet-100',
            mobileOpen ? 'max-h-64' : 'max-h-0'
          )}
        >
          <nav className="px-6 py-4 space-y-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="block font-sans text-sm uppercase tracking-widest text-obsidian-600 hover:text-velvet-500 transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  )
}
