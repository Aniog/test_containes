import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Supplier Search', path: '/services#supplier-search' },
    { label: 'Factory Verification', path: '/services#factory-verification' },
    { label: 'Quality Inspection', path: '/services#quality-inspection' },
    { label: 'Production Follow-up', path: '/services#production-followup' },
    { label: 'Shipping Coordination', path: '/services#shipping' },
  ];

  const company = [
    { label: 'About Us', path: '/' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const resources = [
    { label: 'Products We Source', path: '/products' },
    { label: 'FAQ', path: '/#faq' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  return (
    <footer className="bg-[#0f1f33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1e3a5f] font-bold text-lg">SS</span>
              </div>
              <div>
                <span className="font-bold text-xl text-white">SSourcing</span>
                <span className="text-[#e67e22] font-bold text-xl"> China</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, inspect quality, and coordinate shipping.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1e3a5f] hover:bg-[#2d5a8e] rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1e3a5f] hover:bg-[#2d5a8e] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1e3a5f] hover:bg-[#2d5a8e] rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#e67e22] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Shenzhen, Guangdong, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-[#e67e22] flex-shrink-0" />
                <a
                  href="tel:+8675581234567"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  +86 755 8123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#e67e22] flex-shrink-0" />
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@ssourcingchina.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1e3a5f]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex gap-6">
              {resources.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;