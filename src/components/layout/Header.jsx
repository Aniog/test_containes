import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-bone/90 backdrop-blur-sm border-b border-mist/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="inline-block w-8 h-8 border border-ink relative">
            <span className="absolute inset-1 border border-ink"></span>
          </span>
          <span className="font-serif text-lg md:text-xl tracking-wide text-ink">
            ARTITECT <span className="text-accent">MACHINERY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide transition ${
                  isActive ? 'text-ink' : 'text-steel hover:text-ink'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-ink text-bone px-5 py-2.5 text-sm tracking-wide hover:bg-graphite transition"
          >
            Request a quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-mist/40 bg-bone">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${isActive ? 'text-ink' : 'text-steel'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-ink text-bone px-5 py-3 text-sm tracking-wide"
            >
              Request a quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
