import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Supplier Verification', path: '/services#supplier-verification' },
    { name: 'Factory Audit', path: '/services#factory-audit' },
    { name: 'Quality Control', path: '/services#quality-control' },
    { name: 'Production Follow-up', path: '/services#production' },
    { name: 'Shipping & Logistics', path: '/services#shipping' },
  ];

  const company = [
    { name: 'About Us', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const products = [
    { name: 'Electronics & Components', path: '/products' },
    { name: 'Machinery & Equipment', path: '/products' },
    { name: 'Textiles & Apparel', path: '/products' },
    { name: 'Home & Garden', path: '/products' },
    { name: 'Packaging Materials', path: '/products' },
  ];

  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#1E3A5F] font-bold text-lg">SS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl leading-tight">SSourcing</span>
                <span className="text-white/60 text-xs">China</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Your trusted China sourcing partner. We help global buyers find reliable suppliers, 
              verify factories, inspect quality, and coordinate seamless shipping.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@ssourcingchina.com" className="hover:text-[#E67E22]">
                  info@ssourcingchina.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-5 h-5" />
                <a href="tel:+862112345678" className="hover:text-[#E67E22]">
                  +86 21 1234 5678
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>Shanghai, China</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white/60 hover:text-[#E67E22] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E67E22] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[#E67E22] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/70 hover:text-[#E67E22] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/70 hover:text-[#E67E22] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/70 hover:text-[#E67E22] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} SSourcing China. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-white/60 hover:text-white transition-colors">
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
