import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const scrolled = useScrollHeader(60)
  const { count, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navClasses = cn(
    'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
    scrolled || !isHome
      ? 'bg-white/95 backdrop-blur-md border-b border-velmora-hairline py-3 shadow-soft'
      : 'bg-transparent py-5'
  )

  const textColor =
    scrolled || !isHome ? 'text-velmora-dark' : 'text-white'
  const hoverColor =
    scrolled || !isHome ? 'hover:text-velmora-gold' : 'hover:text-velmora-gold-light'

  return (
    <>
      <header className={navClasses}>
        <div className="container-velmora flex items-center justify-between">
          <button
            className={`md:hidden ${textColor}`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <Link
            to="/"
            className={`font-serif text-2xl tracking-[0.15em] ${textColor}`}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-xs uppercase tracking-widest transition ${hoverColor} ${textColor}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={`flex items-center gap-5 ${textColor}`}>
            <button aria-label="Search" className={`transition ${hoverColor}`}>
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              aria-label="Cart"
              className={`relative transition ${hoverColor}`}
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-50 bg-white transition-transform duration-300 md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="container-velmora flex h-16 items-center justify-between border-b border-velmora-hairline">
          <span className="font-serif text-2xl tracking-[0.15em] text-velmora-dark">
            VELMORA
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="text-velmora-dark"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="container-velmora flex flex-col gap-6 pt-10">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl text-velmora-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
