import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Pizza } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu & Store', to: '/store' },
  { label: 'Book a Table', to: '/booking' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-red-600 font-extrabold text-xl">
          <Pizza className="w-7 h-7" />
          <span>Napoli's</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                pathname === link.to
                  ? 'text-red-600'
                  : 'text-stone-700 hover:text-red-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/booking">
            <Button size="sm">Reserve a Table</Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-stone-700 hover:text-red-600"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-4 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${
                pathname === link.to ? 'text-red-600' : 'text-stone-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)}>
            <Button className="w-full">Reserve a Table</Button>
          </Link>
        </div>
      )}
    </nav>
  )
}
