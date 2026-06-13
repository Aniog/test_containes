import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@artitectmachinery.com</span>
            </a>
          </div>
          <span>Precision Engineering Since 1998</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              ARTITECT<span className="text-accent">MACHINERY</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? 'text-accent' : 'text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/about"
              className="bg-accent text-accent-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-all"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <nav className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path ? 'text-accent' : 'text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="bg-accent text-accent-foreground px-5 py-2 rounded-md text-sm font-medium text-center hover:bg-accent/90 transition-all"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="text-xl font-bold tracking-tight">
              ARTITECT<span className="text-accent">MACHINERY</span>
            </span>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Premium sheet metal folding machines engineered for precision, durability, and performance. Trusted by fabricators worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>123 Industrial Parkway</li>
              <li>Chicago, IL 60601</li>
              <li>+1 (234) 567-890</li>
              <li>info@artitectmachinery.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-center text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
