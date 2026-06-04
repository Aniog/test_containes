import { useState } from 'react'
import { Menu, X, Sword, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: '游戏', href: '#hero' },
  { label: '英雄', href: '#champions' },
  { label: '分路', href: '#roles' },
  { label: '电竞赛事', href: '#esports' },
  { label: '地区', href: '#regions' },
  { label: '新闻', href: '#news' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-lol-bg/90 backdrop-blur-md border-b border-lol-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Sword className="w-7 h-7 text-lol-gold group-hover:text-lol-gold-light transition-colors" />
            <span className="text-xl font-bold tracking-wider">
              <span className="text-lol-gold">LEAGUE</span>
              <span className="text-white/80 ml-1">OF</span>
              <span className="text-lol-gold ml-1">LEGENDS</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-lol-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-lol-gold transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="px-5 py-2 text-sm font-semibold text-lol-bg bg-lol-gold rounded hover:bg-lol-gold-light transition-all duration-300"
            >
              立即游玩
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-lol-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-2 bg-lol-bg-light/95 border-t border-lol-gold/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-4 py-3 text-white/70 hover:text-lol-gold hover:bg-lol-gold/5 rounded-lg transition-all"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="block mt-3 px-4 py-3 text-center font-semibold text-lol-bg bg-lol-gold rounded-lg hover:bg-lol-gold-light transition-all"
            onClick={() => setMobileOpen(false)}
          >
            立即游玩
          </a>
        </div>
      </div>
    </nav>
  )
}