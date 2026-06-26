import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-display font-bold tracking-tight text-navy-900">
                ARTITECT
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-gold-600 font-semibold -mt-1">
                Machinery
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                  location.pathname === link.to
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-slate-600 hover:text-navy-800 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-navy-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
                  location.pathname === link.to
                    ? 'text-gold-600 bg-gold-50'
                    : 'text-slate-600 hover:bg-slate-50'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mx-4 mt-3 px-4 py-3 bg-gold-500 hover:bg-gold-600 text-white text-center text-sm font-semibold rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
