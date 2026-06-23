import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { path: '/about', label: 'About Us' },
      { path: '/case-studies', label: 'Case Studies' },
      { path: '/blog', label: 'Blog' },
      { path: '/careers', label: 'Careers' },
    ],
    services: [
      { path: '/services', label: 'Supplier Verification' },
      { path: '/services', label: 'Factory Audit' },
      { path: '/services', label: 'Quality Inspection' },
      { path: '/services', label: 'Shipping & Logistics' },
    ],
    resources: [
      { path: '/blog', label: 'Sourcing Guide' },
      { path: '/blog', label: 'QC Checklist' },
      { path: '/blog', label: 'Shipping Guide' },
      { path: '/faq', label: 'FAQ' },
    ],
  };

  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white', paddingTop: '64px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ gap: '48px', paddingBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'white', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                fontWeight: 'bold',
                fontSize: '18px'
              }}>
                S
              </div>
              <span style={{ fontSize: '20px', fontWeight: '700' }}>
                SSourcing<span style={{ color: 'var(--accent)' }}>China</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.7', marginBottom: '24px' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ color: 'white', opacity: 0.8 }} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" style={{ color: 'white', opacity: 0.8 }} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" style={{ color: 'white', opacity: 0.8 }} aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.company.map((link) => (
                <li key={link.path + link.label} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '16px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {footerLinks.services.map((link, idx) => (
                <li key={idx} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', transition: 'color 0.2s' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '20px', fontSize: '16px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={18} style={{ color: 'var(--accent)' }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                  Shenzhen, China
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} style={{ color: 'var(--accent)' }} />
                <a href="mailto:info@ssourcingchina.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                  info@ssourcingchina.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: 'var(--accent)' }} />
                <a href="tel:+8675581234567" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                  +86 755 8123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;