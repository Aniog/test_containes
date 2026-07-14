import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navItems = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/#collections' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

function Header({ cartCount, onCartOpen }) {
  const [isSolid, setIsSolid] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 24 || location.pathname !== '/')
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [location.pathname])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const headerClasses = isSolid
    ? 'border-b border-velmora-line bg-velmora-ivory/95 text-velmora-espresso shadow-sm backdrop-blur-md'
    : 'bg-transparent text-white'

  const linkBase = 'text-xs uppercase tracking-[0.34em] transition hover:text-velmora-gold'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerClasses}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="rounded-full border border-current/20 p-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          <Link
            to="/"
            className="font-display text-2xl tracking-[0.45em] sm:text-3xl"
            aria-label="Velmora Fine Jewelry home"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isHashLink = item.to.includes('#')
              if (isHashLink) {
                return (
                  <Link key={item.label} to={item.to} className={linkBase}>
                    {item.label}
                  </Link>
                )
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => `${linkBase} ${isActive ? 'text-velmora-gold' : ''}`}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="rounded-full border border-current/20 p-2 transition hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={onCartOpen}
              className="relative rounded-full border border-current/20 p-2 transition hover:bg-white/10"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-ink">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/55 transition ${isMobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed left-0 top-0 z-[70] h-full w-[85%] max-w-sm border-r border-velmora-line bg-velmora-ivory p-6 text-velmora-espresso shadow-2xl transition duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between">
          <p className="font-display text-2xl tracking-[0.35em]">VELMORA</p>
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="rounded-full border border-velmora-line p-2"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-10 flex flex-col gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="border-b border-velmora-line pb-3 text-sm uppercase tracking-[0.3em] text-velmora-espresso"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Header
