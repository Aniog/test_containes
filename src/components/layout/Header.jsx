import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={
        'fixed top-0 inset-x-0 z-50 transition-all duration-300 ' +
        (scrolled
          ? 'bg-bone-50/95 backdrop-blur border-b border-bone-200'
          : 'bg-transparent')
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide text-graphite-900">
            ARTITECT
          </span>
          <span className="text-[10px] tracking-[0.35em] uppercase text-brass-600 mt-1">
            Machinery
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                'text-sm tracking-[0.18em] uppercase transition-colors ' +
                (isActive
                  ? 'text-brass-600'
                  : 'text-graphite-900 hover:text-brass-600')
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center bg-brass-500 hover:bg-brass-600 text-graphite-950 hover:text-bone-50 px-6 py-3 text-xs uppercase tracking-[0.22em] font-medium transition-colors"
        >
          Request a Quote
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          className="md:hidden text-graphite-900"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-bone-200 bg-bone-50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  'text-sm tracking-[0.18em] uppercase py-2 ' +
                  (isActive ? 'text-brass-600' : 'text-graphite-900')
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center bg-brass-500 text-graphite-950 px-6 py-3 text-xs uppercase tracking-[0.22em] font-medium"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
