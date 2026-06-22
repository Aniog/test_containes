import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Specimens', href: '#specimens' },
  { label: 'Categories', href: '#categories' },
  { label: 'Facts', href: '#facts' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050d1a]/90 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-[#00d4ff]/20 border border-[#00d4ff]/50 flex items-center justify-center">
            <span className="w-3 h-3 rounded-full bg-[#00d4ff] animate-pulse" />
          </span>
          <span className="text-xl font-bold text-white tracking-tight">
            Micro<span className="text-[#00d4ff]">Cosmos</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-300 hover:text-[#00d4ff] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#gallery"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 text-[#00d4ff] text-sm font-medium hover:bg-[#00d4ff]/20 transition-all duration-200"
        >
          Explore Now
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050d1a]/95 backdrop-blur-md border-t border-[#1e3a5f] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-[#00d4ff] text-base font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
