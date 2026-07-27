import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/#story' },
  { label: 'Journal', href: '/#journal' },
]

const linkClass = ({ isActive }) =>
  `transition hover:text-amber-200 ${isActive ? 'text-amber-200' : ''}`

function Navbar({ cartCount, onCartOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const solidNav = !isHome || isScrolled || mobileOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          solidNav
            ? 'border-b border-stone-200/80 bg-stone-50/95 text-stone-900 backdrop-blur'
            : 'bg-transparent text-stone-50'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 md:w-52">
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
            <Link
              to="/"
              className="font-serif text-2xl tracking-[0.35em] sm:text-3xl"
            >
              VELMORA
            </Link>
          </div>

          <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.28em] md:flex">
            {navLinks.map((item) => (
              <NavLink key={item.label} to={item.href} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 md:w-52">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-current/5"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onCartOpen}
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/20 transition hover:bg-current/5"
              aria-label="Open cart"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-200 px-1 text-[10px] font-semibold text-stone-950">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-stone-200 bg-stone-50 px-4 py-4 text-stone-900 md:hidden">
            <nav className="flex flex-col gap-4 text-sm uppercase tracking-[0.28em]">
              {navLinks.map((item) => (
                <NavLink key={item.label} to={item.href} className={linkClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
      <div className="h-[76px]" />
    </>
  )
}

export default Navbar
