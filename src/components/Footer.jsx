import React from 'react';
import { Factory, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Double Folding Machine', href: '#products' },
      { name: 'Double Folder', href: '#products' },
      { name: 'Sheet Metal Folder', href: '#products' },
      { name: 'Sheet Metal Folding Machine', href: '#products' },
      { name: 'Metal Folder', href: '#products' },
      { name: 'Metal Folder Machine', href: '#products' },
      { name: 'Metal Folding Machine', href: '#products' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' },
      { name: 'News', href: '#' },
    ],
    support: [
      { name: 'Technical Support', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Spare Parts', href: '#' },
      { name: 'Service Centers', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Mail, href: 'mailto:info@artitect-machinery.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Factory className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white tracking-tight">
                ARTITECT MACHINERY
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Leading manufacturer of precision sheet metal folding solutions. Engineering excellence for over 20 years.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
