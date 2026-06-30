import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef(null)
  const { count, openCart } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [mobileOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen])

  const handleOverlayClick = (e) => {
    if (e.target === mobileMenuRef.current) {
      setMobileOpen(false)
    }
  }

  const solid = scrolled || !isHome

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
          solid
            ? 'bg-velmora-cream/95 backdrop-blur-md border-b border-velmora-hairline'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              className="md:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu
                size={22}
                className={solid ? 'text-velmora-deep' : 'text-velmora-cream'}
              />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'text-xs uppercase tracking-widest-xl font-medium hover:text-velmora-gold transition-colors',
                    solid ? 'text-velmora-deep' : 'text-velmora-cream'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/"
              className={cn(
                'font-serif text-2xl md:text-3xl tracking-wide absolute left-1/2 -translate-x-1/2',
                solid ? 'text-velmora-deep' : 'text-velmora-cream'
              )}
            >
              VELMORA
            </Link>

            <div className="flex items-center gap-4 md:gap-6">
              <button
                className={cn(
                  'hover:text-velmora-gold transition-colors',
                  solid ? 'text-velmora-deep' : 'text-velmora-cream'
                )}
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={openCart}
                className={cn(
                  'relative hover:text-velmora-gold transition-colors',
                  solid ? 'text-velmora-deep' : 'text-velmora-cream'
                )}
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-velmora-gold text-white text-[10px] font-medium rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        onClick={handleOverlayClick}
        className={cn(
          'fixed inset-0 z-40 bg-velmora-cream transform transition-transform duration-500 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-velmora-hairline">
          <span className="font-serif text-2xl tracking-wide">VELMORA</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-10 space-y-6 h-full">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-velmora-deep hover:text-velmora-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
