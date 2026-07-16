import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const location = useLocation()
  const { itemCount, toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (location.pathname === '/' && !location.hash) {
      setIsScrolled(false)
    } else {
      setIsScrolled(window.scrollY > 28)
    }

    const frameId = window.requestAnimationFrame(() => {
      setIsScrolled(window.scrollY > 28)
    })

    setMobileOpen(false)

    return () => window.cancelAnimationFrame(frameId)
  }, [location.pathname, location.search, location.hash])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !mobileOpen
  const shellClassName = isTransparent
    ? 'bg-gradient-to-b from-surface-alt/70 via-surface-alt/30 to-transparent text-surface'
    : 'border-b border-line/70 bg-surface/95 text-ink shadow-soft backdrop-blur-xl'
  const secondaryText = isTransparent
    ? 'text-surface/90 drop-shadow-sm'
    : 'text-ink-muted'
  const buttonClassName = isTransparent
    ? 'border-surface/35 bg-surface/12 text-surface hover:bg-surface/20'
    : 'border-line bg-surface text-ink hover:bg-accent-soft/40'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${shellClassName}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link to="/" className="font-serif text-3xl tracking-[0.35em] drop-shadow-sm">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`text-xs font-medium uppercase tracking-[0.28em] transition-colors duration-300 hover:text-accent ${secondaryText}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/shop"
            aria-label="Search the shop"
            className={`rounded-full border p-3 transition-all duration-300 ${buttonClassName}`}
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label="Open cart"
            onClick={toggleCart}
            className={`relative rounded-full border p-3 transition-all duration-300 ${buttonClassName}`}
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-surface">
              {itemCount}
            </span>
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((open) => !open)}
            className={`rounded-full border p-3 transition-all duration-300 md:hidden ${buttonClassName}`}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-line/70 bg-surface px-4 py-4 text-ink md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-muted transition-colors duration-300 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default SiteHeader
