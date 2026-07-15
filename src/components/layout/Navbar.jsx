import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/contexts/CartContext'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const { itemCount, openCart } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = isHome && !scrolled

  return (
    <>
      <header
        className={cn(
          'top-0 z-40 w-full transition-all duration-300',
          isHome ? 'fixed' : 'sticky',
          transparent
            ? 'bg-transparent text-white'
            : 'bg-vel-bg/95 text-vel-base shadow-sm backdrop-blur'
        )}
      >
        <nav className="container-vel flex h-20 items-center justify-between">
          <Link
            to="/"
            className="font-serif text-2xl font-medium uppercase tracking-widest"
          >
            Velmora
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={cn(
                    'relative text-sm font-medium uppercase tracking-wide transition-colors hover:text-vel-accent',
                    location.pathname === link.href && 'text-vel-accent'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              className="p-2 transition-colors hover:text-vel-accent"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative p-2 transition-colors hover:text-vel-accent"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-vel-accent text-[10px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="p-2 md:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-vel-base text-white transition-opacity duration-300 md:hidden',
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <div className="container-vel flex h-20 items-center justify-between">
          <span className="font-serif text-2xl font-medium uppercase tracking-widest">
            Velmora
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="container-vel mt-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl font-light uppercase tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
