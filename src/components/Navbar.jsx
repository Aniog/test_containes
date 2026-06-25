import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur border-b border-mist'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="inline-block w-8 h-8 relative">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M4 24 L16 6 L28 24" stroke="#0E1116" strokeWidth="1.5" fill="none" />
              <path d="M4 24 L28 24" stroke="#B68A35" strokeWidth="1.5" />
            </svg>
          </span>
          <span className="font-serif text-xl tracking-[0.18em] text-ink">
            ARTITECT
            <span className="text-accent"> · </span>
            <span className="text-graphite text-base">MACHINERY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-xs uppercase tracking-[0.25em] transition-colors ${
                  isActive ? 'text-ink' : 'text-graphite hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.25em] border border-ink text-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
          >
            Request Quote
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t border-mist">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.25em] ${
                    isActive ? 'text-ink' : 'text-graphite'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-block w-fit text-xs uppercase tracking-[0.25em] border border-ink text-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
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
