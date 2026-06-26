import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Landmark } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Landmark className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-primary tracking-tighter">
                ARTITECT <span className="text-accent">MACHINERY</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent",
                  location.pathname === link.path ? "text-accent" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="bg-primary text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-md",
                  location.pathname === link.path ? "text-accent bg-slate-50" : "text-slate-600 hover:text-accent hover:bg-slate-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
