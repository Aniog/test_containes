import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { cartCount, openCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !isMenuOpen

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          isTransparent
            ? 'bg-transparent text-ivory'
            : 'border-b border-mocha/10 bg-ivory/95 text-ink backdrop-blur-md',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3 lg:w-1/4">
            <button
              type="button"
              onClick={() => setIsMenuOpen((current) => !current)}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm transition lg:hidden',
                isTransparent
                  ? 'border-ivory/30 bg-white/10 text-ivory hover:bg-white/15'
                  : 'border-mocha/15 bg-ivory text-ink hover:bg-sand',
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <Link
              to="/"
              className="font-display text-3xl tracking-[0.32em] sm:text-4xl"
            >
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-10 lg:flex lg:w-2/4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-xs uppercase tracking-luxe transition duration-300 hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 lg:w-1/4">
            <button
              type="button"
              onClick={() => navigate('/shop')}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-full border transition',
                isTransparent
                  ? 'border-ivory/30 bg-white/10 text-ivory hover:bg-white/15'
                  : 'border-mocha/15 bg-ivory text-ink hover:bg-sand',
              )}
              aria-label="Search products"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                'relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition',
                isTransparent
                  ? 'border-ivory/30 bg-white/10 text-ivory hover:bg-white/15'
                  : 'border-mocha/15 bg-ivory text-ink hover:bg-sand',
              )}
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-ink">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        <div
          className={cn(
            'overflow-hidden border-t border-mocha/10 bg-ivory transition-all duration-300 lg:hidden',
            isMenuOpen ? 'max-h-80' : 'max-h-0 border-transparent',
          )}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="border-b border-mocha/10 py-4 text-xs uppercase tracking-[0.3em] text-ink transition hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="h-0" />
    </>
  )
}
