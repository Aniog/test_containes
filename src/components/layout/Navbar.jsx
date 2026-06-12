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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone/95 backdrop-blur border-b border-mist'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="w-9 h-9 border border-ink flex items-center justify-center font-serif text-lg text-ink group-hover:bg-ink group-hover:text-bone transition-colors">
            A
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg md:text-xl text-ink tracking-wide">
              ARTITECT
            </span>
            <span className="text-[10px] tracking-[0.3em] text-steel uppercase">
              Machinery
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-ink'
                    : 'text-steel hover:text-ink'
                }`
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-xs tracking-[0.25em] uppercase border border-ink text-ink px-5 py-3 hover:bg-ink hover:text-bone transition-colors"
          >
            Request Quote
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bone border-t border-mist">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-base tracking-wide ${
                    isActive ? 'text-ink' : 'text-steel'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="text-xs tracking-[0.25em] uppercase border border-ink text-ink px-5 py-3 text-center hover:bg-ink hover:text-bone transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
