import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
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
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={
        'sticky top-0 z-40 w-full border-b transition-colors duration-300 ' +
        (scrolled
          ? 'bg-stone-50/95 backdrop-blur border-stone-200'
          : 'bg-stone-50 border-stone-200/70')
      }
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-stone-900 flex items-center justify-center bg-stone-900 text-stone-50 font-serif text-base tracking-tight">
            A
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg md:text-xl text-stone-900 tracking-tight">
              ARTITECT
            </span>
            <span className="text-[10px] uppercase tracking-[0.32em] text-stone-500 mt-1">
              Machinery
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                'text-sm tracking-wide transition-colors ' +
                (isActive
                  ? 'text-stone-900 font-medium'
                  : 'text-stone-600 hover:text-stone-900')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium hover:bg-amber-800 transition-colors"
        >
          Request Quote
        </Link>

        <button
          type="button"
          className="md:hidden p-2 text-stone-900"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-stone-50">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  'py-3 text-sm tracking-wide border-b border-stone-200/70 ' +
                  (isActive ? 'text-stone-900 font-medium' : 'text-stone-700')
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-5 py-3 text-xs tracking-[0.2em] uppercase font-medium"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
