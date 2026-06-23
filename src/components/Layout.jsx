import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Layout.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/products', label: 'Products' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">S<span className="logo-accent">Sourcing</span></span>
          <span className="logo-subtitle">China</span>
        </Link>

        <div className="navbar-links desktop-only">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/contact" className="cta-button desktop-only">
          Get a Free Quote
        </Link>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="mobile-cta-button"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-text">S<span className="logo-accent">Sourcing</span></span>
              <span className="logo-subtitle">China</span>
            </Link>
            <p className="footer-description">
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="footer-contact">
              <p>Based in Shenzhen, China</p>
              <p>Serving global buyers since 2015</p>
            </div>
          </div>

          <div className="footer-links-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Supplier Verification</Link></li>
              <li><Link to="/services">Quality Inspection</Link></li>
              <li><Link to="/services">Production Follow-up</Link></li>
              <li><Link to="/services">Shipping & Logistics</Link></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/products">Products We Source</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/contact">Get a Quote</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SSourcing China. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout