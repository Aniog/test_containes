import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Logo from './Logo'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Machines' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'bg-ink/90 backdrop-blur-md border-b border-white/10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo light />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300',
                  isActive ? 'text-amber' : 'text-white/80 hover:text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-amber-deep hover:text-white"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink px-6 pb-6 pt-2 md:hidden" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'block rounded-xl px-4 py-3 text-base font-medium transition-colors',
                  isActive ? 'bg-white/5 text-amber' : 'text-white/85 hover:text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-ink"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  )
}
