import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.jsx'
import { Menu, X, Clock, Search, User, LogOut, ChevronDown, Shield, BookOpen, Map, AlertTriangle, Compass } from 'lucide-react'

const navLinks = [
  { to: '/archive', label: 'Archive', icon: BookOpen },
  { to: '/timeline', label: 'Timeline Map', icon: Map },
  { to: '/investigations', label: 'Investigations', icon: AlertTriangle },
  { to: '/membership', label: 'Membership', icon: Shield },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { user, logout, clearanceLevel } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setUserMenuOpen(false) }, [location.pathname])

  const clearanceColors = {
    Observer: 'clearance-observer',
    Researcher: 'clearance-researcher',
    Chronologist: 'clearance-chronologist',
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass border-b border-cyan-400/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-full border border-cyan-400/60 group-hover:border-cyan-400 transition-colors" />
              <div className="absolute inset-1 rounded-full border border-violet-500/40 group-hover:border-violet-500/70 transition-colors" style={{ animation: 'spin 8s linear infinite' }} />
              <Clock className="absolute inset-0 m-auto w-4 h-4 text-cyan-400" />
            </div>
            <div className="hidden sm:block">
              <div className="font-cinzel text-sm font-bold text-slate-100 tracking-widest leading-none">THE TIME TRAVELER'S</div>
              <div className="font-cinzel text-xs text-cyan-400 tracking-[0.3em] leading-none mt-0.5">ARCHIVE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname.startsWith(to)
                    ? 'text-cyan-300 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Link to="/archive" className="hidden md:flex items-center gap-1.5 px-3 py-2 text-slate-400 hover:text-slate-200 transition-colors">
              <Search className="w-4 h-4" />
            </Link>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-cyan-400/20 hover:border-cyan-400/40 transition-all"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{(user.email || 'U')[0].toUpperCase()}</span>
                  </div>
                  <span className={`text-xs font-mono-archive border rounded-full px-2 py-0.5 ${clearanceColors[clearanceLevel]}`}>
                    {clearanceLevel}
                  </span>
                  <ChevronDown className="w-3 h-3 text-slate-400" />
                </button>
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 glass border border-cyan-400/20 rounded-lg overflow-hidden shadow-xl">
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-slate-100 transition-colors">
                      <User className="w-4 h-4" /> Profile
                    </Link>
                    <Link to="/submit-sighting" className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-slate-100 transition-colors">
                      <Compass className="w-4 h-4" /> Submit Sighting
                    </Link>
                    <button onClick={logout} className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors">
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/login" className="px-3 py-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors">Sign In</Link>
                <Link to="/signup" className="px-4 py-1.5 text-sm font-medium rounded-lg bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 transition-all">
                  Join Archive
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-400 hover:text-slate-200">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-cyan-400/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link key={to} to={to} className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:text-slate-100 hover:bg-white/5 transition-colors">
                <Icon className="w-4 h-4 text-cyan-400" />
                {label}
              </Link>
            ))}
            <div className="border-t border-cyan-400/10 pt-3 mt-3">
              {user ? (
                <>
                  <Link to="/profile" className="flex items-center gap-3 px-3 py-3 rounded-lg text-slate-300 hover:bg-white/5 transition-colors">
                    <User className="w-4 h-4 text-cyan-400" /> Profile
                  </Link>
                  <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-3 text-slate-300 hover:text-slate-100">Sign In</Link>
                  <Link to="/signup" className="block px-3 py-3 text-cyan-300 font-medium">Join Archive</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
