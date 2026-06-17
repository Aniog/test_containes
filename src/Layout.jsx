import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b border-brand-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 bg-brand-navy rounded-lg flex items-center justify-center">
                <span className="text-brand-gold font-bold text-sm">AM</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-brand-navy tracking-tight">ARTITECT</span>
                <span className="text-lg font-light text-brand-text-secondary"> MACHINERY</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-gold'
                        : 'text-brand-text-secondary hover:text-brand-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-brand-text-secondary hover:text-brand-navy transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-brand-gold text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brand-navy transition-colors"
              >
                Get a Quote
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-brand-border bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'text-brand-gold'
                        : 'text-brand-text-secondary hover:text-brand-navy'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-brand-gold text-white font-medium px-5 py-3 rounded-lg hover:bg-brand-navy transition-colors mt-4"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-brand-gold rounded-lg flex items-center justify-center">
                  <span className="text-brand-navy font-bold text-sm">AM</span>
                </div>
                <span className="text-lg font-semibold tracking-tight">ARTITECT MACHINERY</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium sheet metal folding machines designed for precision, durability, and performance.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li>123 Industrial Drive, Suite 100</li>
                <li>Chicago, IL 60601</li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    (123) 456-7890
                  </a>
                </li>
                <li>
                  <a href="mailto:info@artitectmachinery.com" className="hover:text-white transition-colors">
                    info@artitectmachinery.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}