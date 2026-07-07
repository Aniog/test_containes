import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCart } from '@/context/CartContext'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const { itemCount, toggleCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || !isHome
            ? 'bg-velvet/95 backdrop-blur-md border-b border-cream/8 shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
          <nav className="flex h-16 md:h-20 items-center justify-between">
            <Link
              to="/"
              className="font-serif text-xl md:text-2xl uppercase tracking-[0.22em] text-cream"
            >
              Velmora
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-xs uppercase tracking-[0.16em] text-cream/90 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <button
                type="button"
                className="text-cream/90 hover:text-accent transition-colors"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
              <button
                type="button"
                onClick={toggleCart}
                className="relative text-cream/90 hover:text-accent transition-colors"
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-sans font-semibold text-velvet">
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden text-cream/90 hover:text-accent transition-colors"
                aria-label="Open menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-40 bg-velvet/98 backdrop-blur-md transition-transform duration-500 md:hidden flex flex-col items-center justify-center gap-8',
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="font-serif text-2xl uppercase tracking-[0.2em] text-cream hover:text-accent transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
