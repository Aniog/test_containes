import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo" style={{ color: 'white' }}>
              <div className="logo-icon">S</div>
              <span>SSourcing China</span>
            </Link>
            <p>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, 
              verify factories, inspect quality, follow production, and coordinate shipping.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Supplier Verification</Link></li>
              <li><Link to="/services">Quality Inspection</Link></li>
              <li><Link to="/services">Production Follow-up</Link></li>
              <li><Link to="/services">Shipping Coordination</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul className="footer-links">
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)' }}>
                <Mail size={16} />
                info@ssourcing-china.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)' }}>
                <Phone size={16} />
                +86 123 4567 8900
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={16} />
                Shenzhen, China
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} SSourcing China. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;