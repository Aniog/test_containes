import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 24)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const headerClass = isScrolled || mobileOpen || !isHome
    ? 'border-velmora-linen bg-velmora-ivory/92 text-velmora-espresso shadow-soft backdrop-blur-xl'
    : 'border-transparent bg-transparent text-velmora-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition duration-500 ${headerClass}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-2xl font-semibold tracking-[0.28em] sm:text-3xl">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-xs font-bold uppercase tracking-[0.22em] lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} className="transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Search" className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-champagne hover:text-velmora-champagne sm:inline-flex">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Open cart" onClick={onCartOpen} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-champagne hover:text-velmora-champagne">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-extrabold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/40 text-velmora-espresso backdrop-blur-sm lg:hidden">
          <div className="ml-auto flex h-full w-[86vw] max-w-sm flex-col bg-velmora-ivory p-6 shadow-jewel">
            <div className="flex items-center justify-between border-b border-velmora-linen pb-5">
              <span className="font-serif text-2xl font-semibold tracking-[0.28em]">VELMORA</span>
              <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-full border border-velmora-linen p-2 text-velmora-espresso">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.22em]">
              {navLinks.map((link) => (
                <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="border-b border-velmora-linen pb-4 text-velmora-espresso">
                  {link.label}
                </NavLink>
              ))}
            </nav>
            <p className="mt-auto border-t border-velmora-linen pt-6 font-serif text-3xl leading-tight text-velmora-ink">
              Demi-fine pieces for the rituals of every day.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
