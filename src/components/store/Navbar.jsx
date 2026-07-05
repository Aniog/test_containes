import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useStore } from '@/context/StoreContext'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#about' },
  { label: 'Journal', href: '/#journal' },
]

export default function Navbar({ isHome }) {
  const { itemCount, setCartOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const solidNav = !isHome || scrolled || mobileOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          solidNav
            ? 'border-b border-velmora-mist/60 bg-velmora-ivory/95 shadow-soft backdrop-blur'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <Link
            to="/"
            className={`font-display text-2xl tracking-[0.3em] ${
              solidNav ? 'text-velmora-ink' : 'text-velmora-soft'
            }`}
          >
            VELMORA
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isHashLink = link.href.includes('#')
              const linkClass = ({ isActive }) =>
                `text-xs font-medium uppercase tracking-[0.18em] transition ${
                  solidNav ? 'text-velmora-ink hover:text-velmora-muted' : 'text-velmora-soft hover:text-white'
                } ${isActive ? 'opacity-100' : 'opacity-80'}`

              return isHashLink ? (
                <Link key={link.label} to={link.href} className={linkClass({ isActive: false })}>
                  {link.label}
                </Link>
              ) : (
                <NavLink key={link.label} to={link.href} className={linkClass}>
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                solidNav
                  ? 'border-velmora-mist/70 bg-white/70 text-velmora-ink'
                  : 'border-white/20 bg-white/10 text-velmora-soft'
              }`}
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Cart"
              onClick={() => setCartOpen(true)}
              className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
                solidNav
                  ? 'border-velmora-mist/70 bg-white/70 text-velmora-ink'
                  : 'border-white/20 bg-white/10 text-velmora-soft'
              }`}
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex min-w-[1.2rem] items-center justify-center rounded-full bg-velmora-gold px-1.5 py-0.5 text-[0.65rem] font-semibold text-velmora-ink">
                {itemCount}
              </span>
            </button>
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((current) => !current)}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden ${
                solidNav
                  ? 'border-velmora-mist/70 bg-white/70 text-velmora-ink'
                  : 'border-white/20 bg-white/10 text-velmora-soft'
              }`}
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-30 bg-velmora-ink/55 backdrop-blur-sm md:hidden">
          <div className="absolute right-0 top-0 h-full w-[84%] max-w-sm bg-velmora-ivory px-6 pb-8 pt-24 text-velmora-ink shadow-velmora">
            <nav className="space-y-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-10 rounded-[2rem] bg-velmora-panel px-5 py-6 text-sm leading-7 text-velmora-muted">
              Designed for gifting and everyday gold moments, with refined pieces from $30 to $120.
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
