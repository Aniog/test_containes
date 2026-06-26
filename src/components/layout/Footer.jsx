import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Supplier Sourcing', path: '/services' },
    { label: 'Factory Verification', path: '/services' },
    { label: 'Quality Control', path: '/services' },
    { label: 'Production Follow-up', path: '/services' },
    { label: 'Shipping Coordination', path: '/services' },
  ],
  company: [
    { label: 'About Us', path: '/how-it-works' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ],
  products: [
    { label: 'Electronics', path: '/products' },
    { label: 'Home & Garden', path: '/products' },
    { label: 'Apparel & Textiles', path: '/products' },
    { label: 'Industrial Equipment', path: '/products' },
    { label: 'Custom Manufacturing', path: '/products' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Ready to Source from China?</h3>
            <p className="text-blue-200 text-sm">Get a free quote within 24 hours. No obligation.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 bg-accent hover:bg-accent-light text-white text-sm font-bold rounded-lg transition-colors no-underline shadow-lg whitespace-nowrap"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary-dark font-extrabold text-sm">SS</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-white tracking-tight">SSourcing</span>
                <span className="text-[10px] text-blue-200 font-medium -mt-1 tracking-wider uppercase">China</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories,
              ensure quality, and coordinate shipping — all from one partner.
            </p>
            <div className="space-y-2 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0" />
                <span>Guangzhou, Guangdong, China</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:info@ssourcingchina.com" className="text-blue-200 hover:text-white no-underline transition-colors">info@ssourcingchina.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+86 138-0000-0000</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-blue-200 hover:text-white no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-blue-200 hover:text-white no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-blue-200 hover:text-white no-underline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-300">
            &copy; {new Date().getFullYear()} SSourcing China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
