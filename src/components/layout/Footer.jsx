import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#1E3A5F', color: '#FFFFFF', padding: '64px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', marginBottom: '48px' }} className="footer-grid">
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: '#C9A227', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E3A5F',
                fontWeight: '700',
                fontSize: '18px'
              }}>
                S
              </div>
              <span style={{ fontSize: '18px', fontWeight: '700' }}>
                SSourcing China
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ color: '#FFFFFF', opacity: 0.7, transition: 'opacity 0.2s' }}>
                <Linkedin size={20} />
              </a>
              <a href="#" style={{ color: '#FFFFFF', opacity: 0.7, transition: 'opacity 0.2s' }}>
                <Twitter size={20} />
              </a>
              <a href="#" style={{ color: '#FFFFFF', opacity: 0.7, transition: 'opacity 0.2s' }}>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Products We Source', path: '/products' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'Blog', path: '/blog' },
              ].map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', transition: 'color 0.2s' }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Supplier Verification',
                'Factory Audits',
                'Quality Control Inspection',
                'Production Follow-up',
                'Shipping & Logistics',
                'Product Sourcing',
              ].map((service) => (
                <li key={service} style={{ marginBottom: '12px' }}>
                  <Link to="/services" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', transition: 'color 0.2s' }}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>Contact Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <MapPin size={18} style={{ color: '#C9A227', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                  Shenzhen, Guangdong, China
                </span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Mail size={18} style={{ color: '#C9A227', flexShrink: 0 }} />
                <a href="mailto:info@ssourcing-china.com" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                  info@ssourcing-china.com
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} style={{ color: '#C9A227', flexShrink: 0 }} />
                <a href="tel:+8675588888888" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                  +86 755 8888 8888
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link to="/privacy" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>Privacy Policy</Link>
            <Link to="/terms" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px' }}>Terms of Service</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;