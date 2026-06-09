import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Zap, Menu, X, Activity, Radio, Shield } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'HOME', id: 'nav-home' },
  { path: '/reactors', label: 'REACTORS', id: 'nav-reactors' },
  { path: '/gallery', label: 'GALLERY', id: 'nav-gallery' },
  { path: '/contact', label: 'INQUIRIES', id: 'nav-contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const formatTime = (d) =>
    d.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-void/95 backdrop-blur-md border-b border-border-gray' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Zap className="w-5 h-5 text-plasma-purple" />
              <div className="absolute inset-0 w-5 h-5 bg-plasma-purple/20 rounded-full blur-md group-hover:blur-lg transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.3em] text-white uppercase leading-none">
                IGNITION
              </span>
              <span className="text-[10px] font-mono text-neutral-500 tracking-[0.2em] leading-tight">
                DYNAMICS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-xs font-mono tracking-[0.15em] uppercase transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-white bg-white/5 border border-border-gray'
                    : 'text-neutral-500 hover:text-white hover:bg-white/[0.02]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Telemetry Bar */}
          <div className="hidden lg:flex items-center gap-4 font-mono text-[10px] text-neutral-500 tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <span className="telemetry-dot bg-tritium-green" />
              <span>SYS:NOMINAL</span>
            </div>
            <div className="w-px h-3 bg-border-gray" />
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-plasma-purple" />
              <span>GRID:12.4 TW</span>
            </div>
            <div className="w-px h-3 bg-border-gray" />
            <div className="flex items-center gap-2">
              <Shield className="w-3 h-3 text-laser-cyan" />
              <span>SEC:OK</span>
            </div>
            <div className="w-px h-3 bg-border-gray" />
            <span className="text-neutral-600">{formatTime(time)} UTC</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-void/98 backdrop-blur-lg border-t border-border-gray">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-3 text-sm font-mono tracking-wider uppercase transition-colors ${
                  location.pathname === link.path
                    ? 'text-white bg-white/5 border-l-2 border-plasma-purple'
                    : 'text-neutral-500 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-border-gray flex items-center gap-3 font-mono text-[10px] text-neutral-600">
              <span className="telemetry-dot bg-tritium-green" />
              <span>SYS:NOMINAL</span>
              <span className="text-neutral-700">|</span>
              <span>{formatTime(time)} UTC</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
