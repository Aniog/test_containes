import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import CartDrawer from './CartDrawer'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', path: '/shop' },
  { label: 'Collections', path: '/shop?category=sets' },
  { label: 'About', path: '/about' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-velmora-800"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className={cn(
                    'text-xs tracking-wider uppercase font-medium transition-colors duration-300',
                    scrolled ? 'text-velmora-700 hover:text-velmora-gold' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                'font-serif text-2xl lg:text-3xl tracking-wider font-semibold transition-colors duration-300',
                scrolled ? 'text-velmora-800' : 'text-white'
              )}
            >
              VELMORA
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-5">
              <button
                aria-label="Search"
                className={cn(
                  'transition-colors duration-300',
                  scrolled ? 'text-velmora-600 hover:text-velmora-800' : 'text-white/80 hover:text-white'
                )}
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
                className={cn(
                  'relative transition-colors duration-300',
                  scrolled ? 'text-velmora-600 hover:text-velmora-800' : 'text-white/80 hover:text-white'
                )}
              >
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-velmora-gold text-white text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            'absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl transition-transform duration-300',
            mobileOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <span className="font-serif text-xl tracking-wider text-velmora-800">VELMORA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="w-5 h-5 text-velmora-600" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-sm uppercase tracking-wider text-velmora-700 hover:text-velmora-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}