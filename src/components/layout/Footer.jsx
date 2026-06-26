import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
  ],
  services: [
    { name: 'Supplier Verification', path: '/services#verification' },
    { name: 'Quality Inspection', path: '/services#inspection' },
    { name: 'Production Follow-up', path: '/services#production' },
    { name: 'Shipping & Logistics', path: '/services#shipping' },
    { name: 'Product Sourcing', path: '/services#sourcing' },
  ],
  resources: [
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Sourcing Guide', path: '/resources/sourcing-guide' },
    { name: 'QC Checklist', path: '/resources/qc-checklist' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-lg">S</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg">SSourcing</span>
                <span className="text-[#F7931E] font-bold text-lg"> China</span>
              </div>
            </Link>
            <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">
              Your trusted China sourcing agent. We help overseas buyers find
              reliable suppliers, verify factories, inspect quality, and
              coordinate shipping.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94A3B8] hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F7931E] flex-shrink-0 mt-0.5" />
                <span className="text-[#94A3B8] text-sm">
                  Shenzhen, Guangdong, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F7931E] flex-shrink-0" />
                <a
                  href="tel:+8675581234567"
                  className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                >
                  +86 755 8123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F7931E] flex-shrink-0" />
                <a
                  href="mailto:info@ssourcing-china.com"
                  className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                >
                  info@ssourcing-china.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2D5A8A] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#94A3B8] text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy"
                className="text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-[#94A3B8] hover:text-white text-sm transition-colors"
              >
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