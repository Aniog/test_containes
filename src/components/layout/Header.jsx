import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?view=collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const transparent = location.pathname === '/' && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  return (
    <header className={cn('fixed inset-x-0 top-0 z-40 transition-all duration-300', transparent ? 'bg-transparent text-velmora-porcelain' : 'border-b border-velmora-mist bg-velmora-ivory/95 text-velmora-espresso shadow-soft backdrop-blur-xl')}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button type="button" className="rounded-full bg-transparent p-2 text-current md:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] text-current md:w-1/4">
          VELMORA
        </Link>

        <div className="hidden items-center justify-center gap-9 md:flex md:w-1/2">
          {navItems.map((item) => (
            <NavLink key={item.label} to={item.to} className="text-xs font-semibold uppercase tracking-luxury text-current/90 transition hover:text-velmora-champagne">
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 md:w-1/4">
          <button type="button" className="rounded-full bg-transparent p-2 text-current transition hover:text-velmora-champagne" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" className="relative rounded-full bg-transparent p-2 text-current transition hover:text-velmora-champagne" onClick={onCartOpen} aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[0.65rem] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/40 backdrop-blur-sm md:hidden">
          <div className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-velmora-ivory p-6 text-velmora-espresso shadow-editorial">
            <div className="flex items-center justify-between border-b border-velmora-mist pb-5">
              <span className="font-serif text-3xl tracking-[0.18em]">VELMORA</span>
              <button type="button" className="rounded-full bg-transparent p-2 text-velmora-espresso" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-5 py-8">
              {navItems.map((item) => (
                <Link key={item.label} to={item.to} className="font-serif text-3xl text-velmora-espresso">
                  {item.label}
                </Link>
              ))}
            </div>
            <p className="mt-auto border-t border-velmora-mist pt-6 text-sm leading-7 text-velmora-taupe">
              Free worldwide shipping, 30-day returns, and gift-ready packaging with every Velmora order.
            </p>
          </div>
        </div>
      )}
    </header>
  )
}
