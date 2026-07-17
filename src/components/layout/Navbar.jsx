import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/collections' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { toggleCart, count } = useCart()
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isTransparent = isHome && !scrolled && !mobileOpen

  return (
    <>
      <header
        className={cn(
          'fixed left-0 right-0 top-0 z-30 transition-all duration-300',
          isTransparent
            ? 'bg-transparent text-white'
            : 'bg-velmora-surface/95 text-velmora-base shadow-sm backdrop-blur-sm'
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className="p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="font-sans text-xs font-medium uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-semibold uppercase tracking-[0.18em] lg:text-3xl"
          >
            Velmora
          </Link>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative p-2 transition-opacity hover:opacity-70"
              aria-label="Open cart"
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-velmora-accent text-[10px] font-semibold text-velmora-base">
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
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-velmora-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between border-b border-stone-200 px-6 py-5">
          <span className="font-serif text-xl font-semibold uppercase tracking-widest text-velmora-base">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="p-2 text-velmora-text-secondary"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="border-b border-stone-100 py-4 font-sans text-sm font-medium uppercase tracking-widest text-velmora-base transition-colors hover:text-velmora-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
