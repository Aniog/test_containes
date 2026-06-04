import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'The Connection' },
  { path: '/global-stories', label: 'Global Stories' },
  { path: '/the-lab', label: 'The Lab' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-stone-warm">
      <header className="fixed top-0 left-0 right-0 z-50 bg-stone-warm/80 backdrop-blur-md border-b border-forest-light/20">
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-semibold tracking-wide text-forest-deep hover:text-forest-DEFAULT transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Intertwined
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm tracking-widest uppercase transition-colors ${
                    location.pathname === link.path
                      ? 'text-forest-deep border-b-2 border-skin-warm pb-1'
                      : 'text-forest-deep/60 hover:text-forest-deep'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-forest-deep"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-stone-warm/95 backdrop-blur-md border-b border-forest-light/20 px-6 pb-6 pt-2">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm tracking-widest uppercase block py-2 transition-colors ${
                      location.pathname === link.path
                        ? 'text-forest-deep font-semibold'
                        : 'text-forest-deep/60 hover:text-forest-deep'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <footer className="bg-forest-dark text-skin-light/70 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Intertwined &mdash; Environmental Photography Project
          </p>
          <p className="font-handwriting text-xl text-skin-warm/60">
            &ldquo;We are nature, looking at itself.&rdquo;
          </p>
        </div>
      </footer>
    </div>
  )
}