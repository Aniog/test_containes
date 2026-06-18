import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/products', label: 'Products' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    { path: '/services', label: 'Supplier Verification' },
    { path: '/services', label: 'Quality Inspection' },
    { path: '/services', label: 'Production Follow-up' },
    { path: '/services', label: 'Shipping & Logistics' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', paddingTop: '64px' }}>
      <div className="container">
        <div className="grid grid-4" style={{ gap: '48px', paddingBottom: '48px' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'var(--color-accent)', 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '700',
                fontSize: '18px'
              }}>
                S
              </div>
              <span style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                color: 'white',
                letterSpacing: '-0.5px'
              }}>
                SSourcing<span style={{ color: 'var(--color-accent)' }}>China</span>
              </span>
            </div>
            <p style={{ color: 'var(--color-text-light)', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#" style={{ color: 'var(--color-text-light)', transition: 'color 0.3s' }}>
                <Linkedin size={20} />
              </a>
              <a href="#" style={{ color: 'var(--color-text-light)', transition: 'color 0.3s' }}>
                <Twitter size={20} />
              </a>
              <a href="#" style={{ color: 'var(--color-text-light)', transition: 'color 0.3s' }}>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={link.path} 
                    style={{ 
                      color: 'var(--color-text-light)', 
                      fontSize: '15px',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: 'white', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  <Link 
                    to={service.path} 
                    style={{ 
                      color: 'var(--color-text-light)', 
                      fontSize: '15px',
                      textDecoration: 'none',
                      transition: 'color 0.3s'
                    }}
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'white', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--color-text-light)', fontSize: '15px', lineHeight: '1.5' }}>
                  Guangzhou, China<br />
                  Serving clients worldwide
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href="mailto:info@ssourcingchina.com" style={{ color: 'var(--color-text-light)', fontSize: '15px', textDecoration: 'none' }}>
                  info@ssourcingchina.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                <a href="tel:+862012345678" style={{ color: 'var(--color-text-light)', fontSize: '15px', textDecoration: 'none' }}>
                  +86 20 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ color: 'var(--color-text-light)', fontSize: '14px', margin: 0 }}>
            &copy; {currentYear} SSourcing China. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'var(--color-text-light)', fontSize: '14px', textDecoration: 'none' }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: 'var(--color-text-light)', fontSize: '14px', textDecoration: 'none' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;