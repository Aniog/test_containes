import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <Link to="/" className="footer-logo">
              <span className="logo-text">S</span>
              <span className="logo-full">Sourcing China</span>
            </Link>
            <p className="footer-desc">
              Your trusted China sourcing agent. We help overseas buyers find verified suppliers, 
              ensure quality, and coordinate seamless shipping.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Supplier Verification</Link></li>
              <li><Link to="/services">Factory Audit</Link></li>
              <li><Link to="/services">Quality Control</Link></li>
              <li><Link to="/services">Production Follow-up</Link></li>
              <li><Link to="/services">Shipping & Logistics</Link></li>
              <li><Link to="/services">Sourcing & Negotiation</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>Guangzhou, China</span>
              </li>
              <li>
                <Phone size={18} />
                <span>+86 20 1234 5678</span>
              </li>
              <li>
                <Mail size={18} />
                <span>info@ssourcingchina.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer