import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/components/store/StoreContext'

const navigationLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const NavBar = () => {
  const { cartCount, openCart } = useStore()
  const location = useLocation()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  React.useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const isTransparent = location.pathname === '/' && !isScrolled
  const logoClassName = isTransparent ? 'text-white' : 'text-velmora-ink'
  const navLinkClassName = isTransparent
    ? 'text-xs font-medium uppercase tracking-[0.28em] text-white/90 transition hover:text-white'
    : 'text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink/85 transition hover:text-velmora-ink'
  const iconButtonClassName = isTransparent
    ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-velmora-ink/15 text-white shadow-soft backdrop-blur-md transition hover:bg-white/10'
    : 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-current/10'

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-[linear-gradient(180deg,rgba(29,23,21,0.72)_0%,rgba(29,23,21,0.28)_72%,transparent_100%)] text-white'
          : 'border-b border-velmora-mist/70 bg-velmora-paper/95 text-velmora-ink backdrop-blur-xl',
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className={[
            'inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden',
            isTransparent
              ? 'border border-white/35 bg-velmora-ink/15 text-white shadow-soft backdrop-blur-md'
              : 'border border-current/20 text-current',
          ].join(' ')}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        <Link
          to="/"
          className={`font-display text-2xl tracking-[0.35em] ${logoClassName} sm:text-3xl`}
        >
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={navLinkClassName}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className={iconButtonClassName}
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={openCart}
            className={`relative ${iconButtonClassName}`}
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-paper">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-velmora-mist/60 bg-velmora-paper px-4 py-4 text-velmora-ink md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-ink/80"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default NavBar
