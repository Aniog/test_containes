import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-brand-dark text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              +1 (555) 123-4567
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              info@artitectmachinery.com
            </span>
          </div>
          <span className="text-slate-400 text-xs">Precision Sheet Metal Solutions</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <div>
                <span className="text-lg font-bold text-brand-primary tracking-tight">ARTITECT</span>
                <span className="text-lg font-light text-slate-500 tracking-tight"> MACHINERY</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-accent'
                        : 'text-slate-600 hover:text-brand-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/about#contact"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 py-3 space-y-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-accent'
                        : 'text-slate-600 hover:text-brand-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/about#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brand-accent rounded flex items-center justify-center">
                  <span className="text-brand-dark font-bold text-sm">AM</span>
                </div>
                <span className="text-lg font-bold tracking-tight">ARTITECT MACHINERY</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium sheet metal folding machines engineered for precision, durability, 
                and efficiency. Built for workshops that demand the best.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>123 Industrial Way, Suite 100</li>
                <li>Chicago, IL 60601</li>
                <li>+1 (555) 123-4567</li>
                <li>info@artitectmachinery.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
