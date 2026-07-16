import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'

const links = [
  { label: 'Shop', to: '/shop' },
  { label: 'Collections', to: '/shop' },
  { label: 'About', to: '/about' },
  { label: 'Journal', to: '/journal' },
]

function SiteHeader() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { cartCount, setIsOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const transparent = pathname === '/' && !scrolled && !mobileOpen
  const shellClass = transparent
    ? 'border-transparent bg-transparent text-velmora-pearl'
    : 'border-velmora-ink/10 bg-velmora-pearl/90 text-velmora-ink backdrop-blur-xl shadow-soft'
  const linkClass = transparent ? 'text-velmora-pearl/90' : 'text-velmora-ink'
  const logoClass = transparent ? 'text-velmora-pearl' : 'text-velmora-ink'

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-30 border-b transition-all duration-300 ease-velmora ${shellClass}`}>
        <div className="velmora-container flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-3 lg:w-1/3">
            <button
              type="button"
              className="inline-flex rounded-full border border-current/15 p-3 lg:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((value) => !value)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <Link to="/" className={`font-display text-3xl tracking-[0.28em] ${logoClass}`}>
              VELMORA
            </Link>
          </div>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.22em] transition ${
                    isActive ? 'text-velmora-gold' : linkClass
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 lg:w-1/3">
            <button
              type="button"
              aria-label="Search products"
              className="rounded-full border border-current/15 p-3 transition hover:border-velmora-gold hover:text-velmora-gold"
              onClick={() => navigate('/shop')}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              className="relative rounded-full border border-current/15 p-3 transition hover:border-velmora-gold hover:text-velmora-gold"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-velmora-gold px-1 text-[10px] font-semibold text-velmora-pearl">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-20 bg-velmora-ink/35 backdrop-blur-sm transition lg:hidden ${
          mobileOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <div
        className={`fixed inset-x-4 top-24 z-30 rounded-[2rem] border border-velmora-ink/10 bg-velmora-pearl p-6 text-velmora-ink shadow-soft transition duration-300 lg:hidden ${
          mobileOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-4">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full border px-4 py-3 text-sm uppercase tracking-[0.22em] ${
                  isActive
                    ? 'border-velmora-gold text-velmora-gold'
                    : 'border-velmora-ink/10 text-velmora-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}

export default SiteHeader
