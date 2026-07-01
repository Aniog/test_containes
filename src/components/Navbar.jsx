import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { cn } from '../lib/utils'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { count, openCart } = useCart()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-30 transition-all duration-300',
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-velmora-cream/95 text-velmora-espresso shadow-sm backdrop-blur'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} className="pointer-events-none" />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="font-serif text-2xl font-medium tracking-wide lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            VELMORA
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70"
              aria-label="Search"
            >
              <Search size={20} className="pointer-events-none" />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 transition-opacity hover:opacity-70"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} className="pointer-events-none" />
              {count > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-white">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-velmora-cream p-6 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-xl">VELMORA</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} className="pointer-events-none text-velmora-taupe" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-sm font-medium uppercase tracking-widest text-velmora-espresso"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
