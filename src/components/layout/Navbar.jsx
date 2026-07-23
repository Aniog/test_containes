import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

const navigation = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/#about' },
  { label: 'Journal', to: '/#journal' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()
  const { itemCount, setIsCartOpen } = useCart()
  const isTransparent = pathname === '/' && !isScrolled

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-30 border-b transition duration-300 ${
          isTransparent
            ? 'border-transparent bg-transparent'
            : 'border-velmora-sand/40 bg-velmora-ivory/95 backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8 lg:px-10">
          <button
            aria-label="Open menu"
            className={`rounded-full border p-2 md:hidden ${
              isTransparent
                ? 'border-white/40 text-white'
                : 'border-velmora-sand/40 text-velmora-ink'
            }`}
            onClick={() => setMobileOpen(true)}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>

          <Link
            className={`font-serif text-2xl tracking-[0.35em] md:text-3xl ${
              isTransparent ? 'text-white' : 'text-velmora-ink'
            }`}
            to="/"
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.2em] transition ${
                    isTransparent
                      ? 'text-white/90 hover:text-white'
                      : 'text-velmora-espresso hover:text-velmora-ink'
                  } ${isActive ? 'opacity-100' : 'opacity-85'}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              aria-label="Search"
              className={`rounded-full border p-2 transition ${
                isTransparent
                  ? 'border-white/35 text-white hover:bg-white/10'
                  : 'border-velmora-sand/40 text-velmora-ink hover:bg-velmora-mist'
              }`}
              type="button"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              aria-label="Open cart"
              className={`relative rounded-full border p-2 transition ${
                isTransparent
                  ? 'border-white/35 text-white hover:bg-white/10'
                  : 'border-velmora-sand/40 text-velmora-ink hover:bg-velmora-mist'
              }`}
              onClick={() => setIsCartOpen(true)}
              type="button"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-velmora-ink/45 transition md:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed left-0 top-0 z-50 h-full w-[84%] max-w-sm border-r border-velmora-sand/30 bg-velmora-ivory px-5 py-5 shadow-velmora transition md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="font-serif text-3xl tracking-[0.28em] text-velmora-ink">VELMORA</span>
          <button
            aria-label="Close menu"
            className="rounded-full border border-velmora-sand/40 p-2 text-velmora-ink"
            onClick={() => setMobileOpen(false)}
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-10 space-y-5">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              className="block text-base uppercase tracking-[0.22em] text-velmora-espresso"
              onClick={() => setMobileOpen(false)}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}

export default Navbar
