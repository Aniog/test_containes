import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-paper transition-shadow ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(14,17,22,0.08)]' : 'border-b border-line'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-xl md:text-2xl tracking-tight text-ink">
            ARTITECT
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-bronze group-hover:text-bronze-dark transition-colors">
            Machinery
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-ink font-medium'
                    : 'text-steel hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-ink text-white hover:bg-bronze transition-colors px-5 py-2.5 text-sm font-medium tracking-wide"
          >
            Request a Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink p-2 -mr-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-base ${isActive ? 'text-ink font-medium' : 'text-steel'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="bg-ink text-white px-5 py-3 text-sm font-medium tracking-wide text-center mt-2"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
