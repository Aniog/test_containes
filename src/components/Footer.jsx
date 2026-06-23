import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Products We Source', path: '/products' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Supplier Discovery', path: '/services#discovery' },
    { name: 'Factory Verification', path: '/services#verification' },
    { name: 'Quality Inspection', path: '/services#inspection' },
    { name: 'Production Follow-up', path: '/services#production' },
    { name: 'Shipping & Logistics', path: '/services#shipping' },
    { name: 'Sample Management', path: '/services#samples' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
      <div className="container section">
        <div className="grid-4">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                backgroundColor: 'white', 
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '18px' }}>S</span>
              </div>
              <span style={{ fontSize: '20px', fontWeight: '700' }}>
                SSourcing<span style={{ color: 'var(--secondary)' }}>China</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px', lineHeight: '1.7' }}>
              Your trusted China sourcing agent. We help overseas buyers find reliable suppliers, verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" style={{ color: 'white', opacity: 0.8 }}><Linkedin size={20} /></a>
              <a href="#" style={{ color: 'white', opacity: 0.8 }}><Twitter size={20} /></a>
              <a href="#" style={{ color: 'white', opacity: 0.8 }}><Facebook size={20} /></a>
              <a href="#" style={{ color: 'white', opacity: 0.8 }}><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.path} style={{ marginBottom: '12px' }}>
                  <Link to={link.path} style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }} className="hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((service) => (
                <li key={service.path} style={{ marginBottom: '12px' }}>
                  <Link to={service.path} style={{ color: 'rgba(255,255,255,0.8)', transition: 'color 0.2s' }} className="hover:text-white">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} style={{ color: 'var(--secondary)' }} />
                <span style={{ color: 'rgba(255,255,255,0.8)' }}>
                  Shenzhen, Guangdong, China
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} style={{ color: 'var(--secondary)' }} />
                <a href="mailto:info@ssourcingchina.com" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} style={{ color: 'var(--secondary)' }} />
                <a href="tel:+8675588888888" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  +86 755 8888 8888
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Privacy Policy</Link>
              <Link to="/terms" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
