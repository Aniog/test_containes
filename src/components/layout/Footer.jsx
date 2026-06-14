import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { navigation, contactInfo } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#1E3A5F]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">SSourcing</span>
                <span className="text-xs text-white/70 leading-tight">China</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and ensure quality products.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Supplier Verification
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Factory Audits
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Quality Control
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Production Monitoring
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Shipping & Logistics
              </Link>
              <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                Custom Sourcing
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>{contactInfo.email}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="mt-2 text-sm text-white/50">
                {contactInfo.businessHours}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
