import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const location = useLocation()
  const { itemCount, toggleCart } = useCart()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  const shellClass =
    location.pathname === '/' && !isScrolled
      ? 'border-transparent bg-transparent text-ivory'
      : 'border-mist/80 bg-ivory/95 text-ink shadow-[0_12px_30px_rgba(23,23,23,0.06)] backdrop-blur'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${shellClass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12 xl:px-16">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link to="/" className="font-serif text-3xl tracking-[0.34em] sm:text-[2rem]">
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-brand md:flex">
            {navigation.map((item) =>
              item.to.includes('#') ? (
                <Link key={item.label} to={item.to} className="transition hover:text-champagne">
                  {item.label}
                </Link>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `transition hover:text-champagne ${isActive ? 'text-champagne' : ''}`}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-champagne hover:text-champagne"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              onClick={toggleCart}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 transition hover:border-champagne hover:text-champagne"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex min-h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[0.65rem] font-semibold text-obsidian">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-obsidian/45 transition md:hidden ${mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-[84%] max-w-sm border-r border-mist bg-ivory px-6 py-6 text-ink shadow-panel transition-transform duration-300 md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between">
          <p className="font-serif text-3xl tracking-[0.28em] text-ink">VELMORA</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-5 text-sm uppercase tracking-brand text-ink">
          {navigation.map((item) => (
            <Link key={item.label} to={item.to} className="border-b border-mist pb-4">
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default SiteHeader
