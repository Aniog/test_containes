import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Clock, Archive, Map, Search, Users, AlertTriangle } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home', icon: Clock },
  { path: '/archive', label: 'Archive', icon: Archive },
  { path: '/timeline', label: 'Timeline', icon: Map },
  { path: '/investigations', label: 'Investigations', icon: Search },
  { path: '/membership', label: 'Membership', icon: Users },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:glow-cyan transition-all duration-300">
              <Clock className="w-4 h-4 text-cyan" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-white tracking-tight">The Time Traveler's</span>
              <span className="text-sm font-bold text-gradient-cyan ml-1">Archive</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-cyan bg-cyan/10 border border-cyan/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-danger/10 border border-danger/20">
              <AlertTriangle className="w-3.5 h-3.5 text-danger" />
              <span className="text-xs font-mono text-danger">3 ACTIVE PARADOXES</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/5"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan bg-cyan/10 border border-cyan/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
