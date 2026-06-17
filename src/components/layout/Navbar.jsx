import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-stone-50/85 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="Artitect Machinery home">
            <span className="inline-flex h-9 w-9 items-center justify-center bg-neutral-950 text-amber-500 font-serif text-lg leading-none">
              A
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg tracking-wide text-neutral-950">Artitect</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Machinery</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-wide transition ${
                    isActive
                      ? 'text-neutral-950'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 bg-neutral-950 text-neutral-50 px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition"
          >
            Request a quote
          </Link>

          <button
            className="md:hidden text-neutral-950"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base tracking-wide ${
                    isActive ? 'text-neutral-950' : 'text-neutral-700'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-neutral-950 text-neutral-50 px-5 py-3 text-xs uppercase tracking-[0.2em]"
            >
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
