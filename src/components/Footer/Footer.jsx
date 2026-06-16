import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    'Double Folding Machine',
    'Sheet Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Accessories & Parts',
  ];

  const company = [
    { label: 'About Us', id: 'about' },
    { label: 'Our Products', id: 'products' },
    { label: 'Features', id: 'features' },
    { label: 'Contact', id: 'contact' },
  ];

  const support = [
    'Technical Documentation',
    'Maintenance Guides',
    'Spare Parts',
    'Warranty Info',
    'Training Videos',
  ];

  const socials = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0D0D1A] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center space-x-3 mb-6">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="8" fill="#1A1A2E" />
                <path d="M10 28V12L20 20L10 28Z" fill="#E94560" />
                <path d="M20 20L30 12V28L20 20Z" fill="#E94560" opacity="0.7" />
              </svg>
              <div>
                <h3 className="font-bold text-lg text-white tracking-tight leading-none">ARTITECT</h3>
                <p className="text-xs text-[#E94560] tracking-[0.2em]">MACHINERY</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading manufacturer of precision metal folding equipment. Engineering excellence since 1998.
            </p>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[#E94560] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {products.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-400 hover:text-[#E94560] text-sm transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#E94560] text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-[#E94560] text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E94560] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Industrial Park, Shanghai, China
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E94560] flex-shrink-0 mt-0.5" />
                <a href="tel:+862188889999" className="text-gray-400 hover:text-[#E94560] text-sm transition-colors">
                  +86 21 8888 9999
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#E94560] flex-shrink-0 mt-0.5" />
                <a href="mailto:sales@artitectmachinery.com" className="text-gray-400 hover:text-[#E94560] text-sm transition-colors">
                  sales@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-500 hover:text-[#E94560] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-[#E94560] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-[#E94560] text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
