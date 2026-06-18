import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer style={{ backgroundColor: '#0F172A', color: '#F1F5F9', padding: '64px 0 32px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                backgroundColor: '#E67E22', 
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '16px'
              }}>
                S
              </div>
              <span style={{ fontSize: '18px', fontWeight: '700', color: '#FFFFFF' }}>
                SSourcing<span style={{ color: '#E67E22' }}>China</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ color: '#94A3B8', transition: 'color 0.2s' }}>
                <Linkedin size={20} />
              </a>
              <a href="#" style={{ color: '#94A3B8', transition: 'color 0.2s' }}>
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: '#94A3B8', fontSize: '14px', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/services" style={{ color: '#94A3B8', fontSize: '14px' }}>Supplier Verification</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/services" style={{ color: '#94A3B8', fontSize: '14px' }}>Quality Inspection</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/services" style={{ color: '#94A3B8', fontSize: '14px' }}>Production Follow-up</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/services" style={{ color: '#94A3B8', fontSize: '14px' }}>Shipping & Logistics</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link to="/services" style={{ color: '#94A3B8', fontSize: '14px' }}>Product Sourcing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#E67E22" style={{ marginTop: '2px' }} />
                <span style={{ color: '#94A3B8', fontSize: '14px' }}>
                  Shenzhen, Guangdong, China
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#E67E22" />
                <a href="mailto:info@ssourcingchina.com" style={{ color: '#94A3B8', fontSize: '14px' }}>
                  info@ssourcingchina.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} color="#E67E22" />
                <a href="tel:+8675581234567" style={{ color: '#94A3B8', fontSize: '14px' }}>
                  +86 755 8123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#64748B', fontSize: '14px' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#64748B', fontSize: '14px' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;