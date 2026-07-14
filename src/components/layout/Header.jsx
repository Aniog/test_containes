import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gift' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const transparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname, location.search])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition duration-300',
        transparent
          ? 'border-velmora-ivory/15 bg-transparent text-velmora-ivory'
          : 'border-velmora-sand bg-velmora-cream/95 text-velmora-espresso shadow-[0_10px_30px_rgba(33,26,22,0.05)] backdrop-blur-xl',
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-2xl tracking-[0.18em] md:text-3xl" aria-label="Velmora home">
          VELMORA
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="text-[0.72rem] font-semibold uppercase tracking-editorial transition hover:text-velmora-gold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-gold hover:text-velmora-gold sm:inline-flex" aria-label="Search">
            <Search className="h-4 w-4" />
          </button>
          <button type="button" className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:border-velmora-gold hover:text-velmora-gold" aria-label="Open cart" onClick={onCartOpen}>
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-velmora-gold px-1 text-[0.65rem] font-bold text-velmora-ivory">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/40 backdrop-blur-sm md:hidden">
          <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-velmora-cream p-6 text-velmora-espresso shadow-soft">
            <div className="flex items-center justify-between border-b border-velmora-sand pb-5">
              <span className="font-serif text-2xl tracking-[0.18em]">VELMORA</span>
              <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-velmora-sand" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-5 py-8">
              {navLinks.map((link) => (
                <NavLink key={link.label} to={link.to} className="font-serif text-3xl text-velmora-espresso">
                  {link.label}
                </NavLink>
              ))}
            </div>
            <p className="mt-auto border-t border-velmora-sand pt-5 text-sm leading-6 text-velmora-ink/75">
              Demi-fine gold pieces designed for every day, every gift, and every quiet moment of celebration.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
