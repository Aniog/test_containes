import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'Collections', href: '/shop' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
]

export default function Nav() {
  const scrolled = useScrolled(40)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navBg =
    isHome && !scrolled
      ? 'bg-transparent text-warm-white'
      : 'bg-warm-white/95 text-ink shadow-sm backdrop-blur'

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-400',
          navBg
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl tracking-widest md:text-3xl"
          >
            VELMORA
          </Link>

          {/* Center links desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="link-underline text-xs uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              className="p-2 transition-colors hover:text-gold"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative p-2 transition-colors hover:text-gold"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-white">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full w-[80%] max-w-xs bg-warm-white shadow-2xl transition-transform duration-300 ease-out md:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="font-serif text-xl tracking-widest">VELMORA</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col p-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-line py-4 text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
