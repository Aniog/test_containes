import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/explore', label: 'Explore' },
  { to: '/submit', label: 'Contribute' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location.pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/90 backdrop-blur-md border-b border-stardust' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aurora to-nova flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-aurora/30 group-hover:shadow-aurora/50 transition-all duration-200">
            ✦
          </div>
          <div>
            <div className="font-cinzel text-starlight text-sm font-semibold leading-none">Memory Archive</div>
            <div className="text-twilight text-xs font-mono leading-none mt-0.5">Global Initiative</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
                  active
                    ? 'text-aurora-light bg-aurora/10 border border-aurora/30'
                    : 'text-moonlight hover:text-starlight hover:bg-stardust/50'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            to="/submit"
            className="ml-3 px-5 py-2 rounded-full bg-aurora hover:bg-aurora-light text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-aurora/30"
          >
            Add Memory
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-stardust/50 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-moonlight transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-moonlight transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-moonlight transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-void/95 backdrop-blur-md border-b border-stardust px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-3 rounded-xl text-sm font-mono transition-all duration-200 ${
                  active ? 'text-aurora-light bg-aurora/10' : 'text-moonlight hover:text-starlight hover:bg-stardust/50'
                }`}
              >
                {label}
              </Link>
            )
          })}
          <Link
            to="/submit"
            className="block mt-2 px-4 py-3 rounded-xl bg-aurora text-white text-sm font-semibold text-center"
          >
            Add Memory ✦
          </Link>
        </div>
      )}
    </nav>
  )
}
