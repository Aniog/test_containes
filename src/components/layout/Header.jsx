import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop?collection=gold' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const Header = ({ cartCount, onCartOpen }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navSurface = scrolled || mobileOpen
    ? 'bg-velmora-ivory/95 text-velmora-ink shadow-[0_1px_0_rgba(222,209,195,0.85)] backdrop-blur-xl'
    : 'bg-transparent text-velmora-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${navSurface}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex flex-1 items-center lg:hidden">
          <button
            type="button"
            className="rounded-full border border-current/25 p-2 transition hover:border-velmora-champagne hover:text-velmora-champagne"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <Link to="/" className="flex flex-1 items-center lg:flex-none">
          <span className="font-serif text-3xl tracking-[0.18em]">VELMORA</span>
        </Link>

        <div className="hidden flex-1 justify-center gap-10 lg:flex">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} className="text-xs font-semibold uppercase tracking-[0.28em] transition hover:text-velmora-champagne">
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <button type="button" className="hidden rounded-full p-2 transition hover:text-velmora-champagne sm:inline-flex" aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button type="button" onClick={onCartOpen} className="relative rounded-full p-2 transition hover:text-velmora-champagne" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-velmora-champagne px-1 text-[10px] font-bold text-velmora-ink">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden border-t border-velmora-line bg-velmora-ivory text-velmora-ink transition-all duration-500 lg:hidden ${mobileOpen ? 'max-h-80' : 'max-h-0 border-transparent'}`}>
        <div className="space-y-1 px-5 py-5">
          {links.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={() => setMobileOpen(false)} className="block border-b border-velmora-line py-4 text-sm font-semibold uppercase tracking-[0.26em] text-velmora-ink">
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
