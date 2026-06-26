import React from 'react';
import { Factory, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { label: 'Double Folding Machine', href: '#products' },
      { label: 'Double Folder', href: '#products' },
      { label: 'Sheet Metal Folder', href: '#products' },
      { label: 'Sheet Metal Folding Machine', href: '#products' },
      { label: 'Metal Folder', href: '#products' },
      { label: 'Metal Folder Machine', href: '#products' },
      { label: 'Metal Folding Machine', href: '#products' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
    ],
    support: [
      { label: 'Technical Support', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Warranty', href: '#' },
      { label: 'Spare Parts', href: '#' },
    ],
  };

  return (
    <footer className="bg-brand-900 text-brand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center">
                <Factory className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">
                  ARTITECT
                </span>
                <span className="text-xs font-semibold text-brand-400 tracking-widest leading-none mt-0.5">
                  MACHINERY
                </span>
              </div>
            </a>
            <p className="text-brand-300 leading-relaxed mb-6 max-w-md">
              Precision sheet metal folding solutions for industrial manufacturers. Engineered for excellence, built for durability.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-brand-300" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-brand-800 rounded-lg flex items-center justify-center hover:bg-brand-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-brand-300" />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-300 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-300 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-300 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-brand-800">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-brand-300">info@artitect-machinery.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-brand-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent-500" />
              <span className="text-sm text-brand-300">Detroit, MI 48201</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-brand-800 text-center">
          <p className="text-sm text-brand-400">
            &copy; {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
