import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Clock, Shield } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/archive', label: 'Archive' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/investigations', label: 'Investigations' },
  { path: '/membership', label: 'Membership' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-archive-bg/80 backdrop-blur-xl border-b border-archive-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="relative">
              <Clock className="w-8 h-8 text-archive-glow" />
              <div className="absolute inset-0 w-8 h-8 bg-archive-glow/20 rounded-full blur-md" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-cinzel text-sm lg:text-base font-bold text-archive-text tracking-wider leading-tight">
                THE TIME TRAVELER'S
              </h1>
              <p className="font-mono text-[10px] text-archive-glow tracking-[0.3em] -mt-0.5">
                ARCHIVE
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  location.pathname === link.path
                    ? 'text-archive-glow bg-archive-glow/10 border border-archive-glow/30'
                    : 'text-archive-muted hover:text-archive-text hover:bg-archive-surface/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Clearance Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-archive-border/50 bg-archive-surface/40">
              <Shield className="w-3.5 h-3.5 text-archive-amber" />
              <span className="font-mono text-xs text-archive-amber">CLEARANCE: OBSERVER</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-archive-muted hover:text-archive-text bg-transparent border-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-archive-bg/95 backdrop-blur-xl border-t border-archive-border/30 animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium no-underline ${
                  location.pathname === link.path
                    ? 'text-archive-glow bg-archive-glow/10'
                    : 'text-archive-muted hover:text-archive-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-archive-border/30">
              <div className="flex items-center gap-2 px-4 py-2">
                <Shield className="w-3.5 h-3.5 text-archive-amber" />
                <span className="font-mono text-xs text-archive-amber">CLEARANCE: OBSERVER</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
