import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Supplier Sourcing', path: '/services#sourcing' },
    { name: 'Factory Verification', path: '/services#verification' },
    { name: 'Quality Inspection', path: '/services#inspection' },
    { name: 'Production Follow-up', path: '/services#production' },
    { name: 'Shipping Coordination', path: '/services#shipping' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  products: [
    { name: 'Electronics', path: '/products#electronics' },
    { name: 'Home & Garden', path: '/products#home-garden' },
    { name: 'Machinery', path: '/products#machinery' },
    { name: 'Textiles', path: '/products#textiles' },
    { name: 'Custom Products', path: '/products#custom' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="container py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Source from China?
              </h2>
              <p className="text-slate-300 text-lg">
                Get a free consultation and quote within 24 hours.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-800 font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">SSourcing</span>
                <span className="text-xs text-slate-400 font-medium">China</span>
              </div>
            </Link>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers,
              verify factories, and manage quality from order to delivery.
            </p>
            <div className="space-y-3">
              <a href="mailto:info@ssourcingchina.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@ssourcingchina.com
              </a>
              <a href="tel:+86-21-5555-0123" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +86 21 5555 0123
              </a>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>Shanghai, China</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
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
