import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'
  const isTransparent = isHome && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const linkClass = ({ isActive }) =>
    `text-xs uppercase tracking-[0.24em] transition-colors duration-300 ${isActive ? 'velmora-nav-active' : ''}`

  return (
    <header
      className={`velmora-header fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        isTransparent
          ? 'velmora-header-transparent border-velmora-ivory/15 bg-transparent text-velmora-ivory'
          : 'velmora-header-solid border-velmora-sand/80 bg-velmora-ivory/95 text-velmora-espresso shadow-[0_10px_30px_rgba(33,25,21,0.07)] backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] md:text-4xl">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-current/20 transition-colors hover:border-velmora-champagne hover:text-velmora-champagne sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={onCartOpen}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition-colors hover:border-velmora-champagne hover:text-velmora-champagne"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/55 text-velmora-espresso backdrop-blur-sm md:hidden">
          <aside className="ml-auto flex h-full w-[86vw] max-w-sm flex-col bg-velmora-ivory p-6 shadow-editorial">
            <div className="flex items-center justify-between border-b border-velmora-sand pb-5">
              <span className="font-serif text-3xl font-semibold tracking-[0.18em]">VELMORA</span>
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full border border-velmora-sand text-velmora-espresso"
                aria-label="Close navigation"
                onClick={() => setMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 py-8" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link key={item.label} to={item.to} className="border-b border-velmora-sand/70 py-4 font-serif text-3xl text-velmora-espresso">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="mt-auto border-t border-velmora-sand pt-5 text-sm leading-6 text-velmora-cocoa/75">
              Demi-fine gold jewelry made for gifting, self-purchase, and every soft-glow ritual in between.
            </p>
          </aside>
        </div>
      )}
    </header>
  )
}
