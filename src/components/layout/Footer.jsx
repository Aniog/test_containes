import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Services', path: '/services' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Products We Source', path: '/products' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  'Supplier Verification',
  'Quality Control',
  'Factory Audits',
  'Production Monitoring',
  'Shipping Coordination',
  'Product Sourcing',
];

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Section */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready to Start Sourcing from China?</h3>
              <p className="text-white/90 mt-2">Get a free consultation and quote within 24 hours.</p>
            </div>
            <Link
              to="/contact"
              className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg whitespace-nowrap"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">SSourcing</span>
                <span className="text-xl font-bold text-accent ml-1">China</span>
              </div>
            </Link>
            <p className="text-white/70 mb-6 leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, verify factories, and manage the entire supply chain.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-white/70">
                  Nanshan District, Shenzhen,<br />
                  Guangdong Province, China
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:+8613800000000" className="text-white/70 hover:text-accent transition-colors">
                  +86 138 0000 0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-white/70 hover:text-accent transition-colors">
                  info@ssourcingchina.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © 2024 SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-white/50 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
