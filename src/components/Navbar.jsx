import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TreePine } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/conservation', label: 'Conservation' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1f0e]/90 backdrop-blur-md border-b border-green-900/40">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-green-300 font-bold text-xl tracking-wide">
          <TreePine className="w-6 h-6 text-green-400" />
          ForestWorld
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-sm font-medium transition-colors ${
                  pathname === to
                    ? 'text-green-300 border-b-2 border-green-400 pb-0.5'
                    : 'text-green-100/70 hover:text-green-200'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-green-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1f0e] border-t border-green-900/40 px-6 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${
                pathname === to ? 'text-green-300' : 'text-green-100/70'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
