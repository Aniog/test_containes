import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useStore } from '../../context/StoreContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop#collections' },
  { label: 'About', to: '/#story' },
  { label: 'Journal', to: '/#journal' },
]

const SiteHeader = () => {
  const { itemCount, openCart } = useStore()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  const homeAtTop = location.pathname === '/' && !isScrolled
  const shellClass = homeAtTop
    ? 'border-transparent bg-transparent text-pearl'
    : 'border-sand/50 bg-porcelain/95 text-obsidian shadow-soft backdrop-blur'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${shellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-2xl tracking-brand md:text-3xl">
          VELMORA
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] md:flex">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="transition duration-300 hover:text-champagne"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            aria-label="Search products"
            onClick={() => navigate('/shop')}
            className="rounded-full border border-current/15 p-2.5 transition duration-300 hover:border-champagne hover:text-champagne"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            onClick={openCart}
            className="relative rounded-full border border-current/15 p-2.5 transition duration-300 hover:border-champagne hover:text-champagne"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-champagne px-1 text-[10px] font-semibold text-obsidian">
              {itemCount}
            </span>
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((value) => !value)}
            className="rounded-full border border-current/15 p-2.5 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-sand/50 bg-porcelain px-5 py-4 text-obsidian md:hidden">
          <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em]">
            {links.map((link) => (
              <NavLink key={link.label} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}

export default SiteHeader
