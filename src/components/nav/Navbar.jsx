import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: '宇宙', en: 'Home' },
  { to: '/gallery', label: '銀河', en: 'Gallery' },
  { to: '/data', label: 'データ', en: 'Data' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-star-white tracking-[0.2em] text-sm font-light hover:text-nebula-light transition-colors duration-300"
        >
          CELESTIAL<span className="text-nebula-light mx-1">·</span>ODYSSEY
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label, en }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `group flex flex-col items-center gap-0.5 transition-colors duration-300 ${
                    isActive ? 'text-star-white' : 'text-star-dim hover:text-star-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-light">
                      {en}
                    </span>
                    <span className="font-serif text-[11px] tracking-wider opacity-50">
                      {label}
                    </span>
                    <span
                      className={`h-px w-full transition-all duration-300 ${
                        isActive
                          ? 'bg-nebula-light opacity-100'
                          : 'bg-nebula-light opacity-0 group-hover:opacity-40'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-star-dim hover:text-star-white transition-colors p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-white/[0.06]">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ to, label, en }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-2 transition-colors duration-200 ${
                      isActive ? 'text-star-white' : 'text-star-dim'
                    }`
                  }
                >
                  <span className="font-sans text-xs uppercase tracking-[0.25em]">{en}</span>
                  <span className="font-serif text-xs opacity-40">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
