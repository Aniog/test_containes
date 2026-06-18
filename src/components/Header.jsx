import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Factory } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <Factory className="logo-icon" />
            <span className="logo-text">SSourcing China</span>
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="btn btn-primary desktop-cta">
            Get a Free Quote
          </Link>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary mobile-cta"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 700;
          font-size: 20px;
          color: var(--primary);
        }

        .logo-icon {
          width: 32px;
          height: 32px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-link {
          padding: 8px 16px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-secondary);
          border-radius: 4px;
          transition: all 0.2s;
        }

        .nav-link:hover {
          color: var(--primary);
          background: var(--bg-secondary);
        }

        .nav-link.active {
          color: var(--primary);
          background: var(--bg-secondary);
        }

        .desktop-cta {
          padding: 10px 20px;
          font-size: 14px;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
          color: var(--text-primary);
        }

        .mobile-nav {
          display: none;
          padding: 16px 0;
          border-top: 1px solid var(--border);
        }

        .mobile-nav-link {
          display: block;
          padding: 12px 0;
          font-size: 16px;
          font-weight: 500;
          color: var(--text-secondary);
          border-bottom: 1px solid var(--border);
        }

        .mobile-nav-link.active {
          color: var(--primary);
        }

        .mobile-cta {
          margin-top: 16px;
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-nav, .desktop-cta {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </header>
  )
}

export default Header