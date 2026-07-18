import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function NavBar() {
  const location = useLocation()
  const { itemCount, setIsCartOpen } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const isTransparent = isHome && !isScrolled && !mobileOpen
  const shellClasses = isTransparent
    ? 'bg-transparent text-velmora-porcelain'
    : 'border-b border-velmora-line/70 bg-velmora-porcelain/95 text-velmora-espresso shadow-soft backdrop-blur'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shellClasses}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="font-display text-2xl tracking-[0.45em] sm:text-3xl">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-10 text-xs uppercase tracking-[0.32em] lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  `transition hover:text-velmora-gold ${isActive ? 'text-velmora-gold' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="rounded-full border border-current/15 p-2 transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={() => setIsCartOpen(true)}
              className="relative rounded-full border border-current/15 p-2 transition hover:border-velmora-gold hover:text-velmora-gold"
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-velmora-gold text-[10px] font-semibold text-velmora-ink">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((current) => !current)}
              className="rounded-full border border-current/15 p-2 transition hover:border-velmora-gold hover:text-velmora-gold lg:hidden"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-current/10 bg-velmora-porcelain px-4 py-6 text-velmora-espresso shadow-soft lg:hidden">
            <nav className="flex flex-col gap-5 text-xs uppercase tracking-[0.32em]">
              {navItems.map((item) => (
                <NavLink key={item.label} to={item.href} className="transition hover:text-velmora-gold">
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
      <div className="h-[72px] sm:h-[84px]" aria-hidden />
    </>
  )
}
