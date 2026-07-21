import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X } from 'lucide-react'
import { CartDrawer } from './CartDrawer'

const navLinks = [
  { label: 'Shop', href: '/shop' },
  { label: 'Collections', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Journal', href: '/journal' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const bgClass = isHome && !scrolled ? 'bg-transparent text-cream-100' : 'bg-cream-100/95 text-espresso-900 shadow-sm backdrop-blur'
  const borderClass = isHome && !scrolled ? 'border-white/10' : 'border-warmgray-200'

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full transition-all duration-300 ${bgClass}`}
      >
        <div className="container-velmora">
          <nav className="flex h-16 items-center justify-between md:h-20">
            <Link
              to="/"
              className="font-serif text-xl font-semibold uppercase tracking-widest-xl md:text-2xl"
            >
              Velmora
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-sans text-xs font-medium uppercase tracking-widest transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1 md:gap-3">
              <button
                type="button"
                className="p-2 transition-colors hover:opacity-70"
                aria-label="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <div className="hidden md:block">
                <CartDrawer />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-2 md:hidden"
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-espresso-900/40 transition-opacity duration-300 md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[min(85vw,320px)] bg-cream-100 shadow-2xl transition-transform duration-500 ease-out md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex items-center justify-between">
            <span className="font-serif text-xl font-semibold uppercase tracking-widest-xl">Velmora</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-warmgray-500"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl font-medium text-espresso-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center justify-between border-t border-warmgray-200 pt-6">
            <span className="font-sans text-sm text-warmgray-500">Your bag</span>
            <CartDrawer />
          </div>
        </div>
      </aside>
    </>
  )
}
