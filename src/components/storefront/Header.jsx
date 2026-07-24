import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  ['Shop', '/shop'],
  ['Collections', '/#collections'],
  ['About', '/#story'],
  ['Journal', '/#journal'],
]

export default function Header({ cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const transparent = location.pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.hash])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${transparent ? 'bg-transparent text-velmora-porcelain' : 'border-b border-velmora-champagne/20 bg-velmora-ivory/92 text-velmora-cocoa shadow-soft backdrop-blur-xl'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="rounded-full p-2 transition hover:bg-velmora-champagne/15 lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="font-serif text-3xl font-semibold tracking-[0.18em] lg:text-4xl">
          VELMORA
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-xs font-bold uppercase tracking-[0.22em] lg:flex">
          {links.map(([label, href]) => (
            <NavLink key={label} to={href} className="transition hover:text-velmora-champagne">
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Search" className="rounded-full p-2 transition hover:bg-velmora-champagne/15">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" aria-label="Open cart" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:bg-velmora-champagne/15">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-espresso">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/55 backdrop-blur-sm lg:hidden">
          <div className="ml-auto h-full w-[84vw] max-w-sm bg-velmora-porcelain p-6 text-velmora-cocoa shadow-glow">
            <div className="flex items-center justify-between border-b border-velmora-champagne/25 pb-5">
              <span className="font-serif text-3xl font-semibold tracking-[0.18em]">VELMORA</span>
              <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="rounded-full p-2 hover:bg-velmora-champagne/15">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 grid gap-5 text-sm font-bold uppercase tracking-[0.24em]">
              {links.map(([label, href]) => (
                <Link key={label} to={href} className="border-b border-velmora-champagne/20 pb-4 text-velmora-cocoa">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
