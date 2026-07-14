import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { itemCount, setIsCartOpen } = useStore()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shellClassName = scrolled || mobileOpen || location.pathname !== '/'
    ? 'border-b border-white/10 bg-velmora-panel/95 shadow-card backdrop-blur'
    : 'bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${shellClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-velmora-cream sm:px-6 lg:px-8">
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 lg:hidden"
          onClick={() => setMobileOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Link to="/" className="font-display text-3xl tracking-[0.35em] text-velmora-cream">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className="text-xs uppercase tracking-[0.32em] text-velmora-cream/80 transition hover:text-velmora-cream"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-velmora-cream transition hover:bg-white/10"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-velmora-cream transition hover:bg-white/10"
            aria-label="Open cart"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            {itemCount ? (
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-panel">
                {itemCount}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/10 bg-velmora-panel px-4 pb-6 pt-3 text-velmora-cream lg:hidden">
          <nav className="grid gap-4">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="text-sm uppercase tracking-[0.28em] text-velmora-cream/80"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
