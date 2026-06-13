import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              info@artitectmachinery.com
            </span>
          </div>
          <span>Precision Sheet Metal Folding Machines</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm group-hover:bg-amber-600 transition-colors">
              AM
            </div>
            <div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">
                ARTITECT
              </span>
              <span className="text-xs text-slate-500 block -mt-0.5 tracking-widest uppercase">
                Machinery
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-amber-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 pb-4 pt-2">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-1 ${
                    location.pathname === link.to
                      ? 'text-amber-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center text-white font-extrabold text-sm">
                AM
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                ARTITECT
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Precision-engineered sheet metal folding machines for demanding industrial applications. Quality you can trust.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Double Folding Machine</li>
              <li>Sheet Metal Folder</li>
              <li>Metal Folding Machine</li>
              <li>CNC Folder</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-amber-400 transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                info@artitectmachinery.com
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
