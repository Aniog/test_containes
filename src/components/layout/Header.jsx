import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const Header = () => {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { itemCount, toggleCart } = useCart()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const useTransparentHeader = pathname === '/' && !isScrolled && !isMobileMenuOpen
  const shellClasses = useTransparentHeader
    ? 'border-transparent bg-transparent text-brand-ivory'
    : 'border-white/10 bg-brand-ink/95 text-brand-ivory shadow-soft backdrop-blur-xl'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-30 border-b transition duration-300 ${shellClasses}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-10">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-full border border-current/20 p-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Link to="/" className="font-display text-3xl tracking-[0.35em]">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className="text-sm uppercase tracking-[0.28em] text-current/80 transition hover:text-brand-gold"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 md:gap-3">
            <button
              type="button"
              className="rounded-full border border-current/20 p-2.5 text-current transition hover:border-brand-gold hover:text-brand-gold"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={toggleCart}
              className="relative rounded-full border border-current/20 p-2.5 text-current transition hover:border-brand-gold hover:text-brand-gold"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-gold px-1 text-[10px] font-semibold text-brand-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-brand-ink/50 transition lg:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-brand-ivory px-6 py-6 text-brand-ink transition duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <Link to="/" className="font-display text-3xl tracking-[0.28em]">
            VELMORA
          </Link>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-full border border-brand-border p-2"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className="text-sm uppercase tracking-[0.3em] text-brand-ink transition hover:text-brand-gold-deep"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Header
