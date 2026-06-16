import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    products: [
      { name: 'Double Folding Machine', href: '#products' },
      { name: 'Sheet Metal Folder', href: '#products' },
      { name: 'Metal Folder Machine', href: '#products' },
      { name: 'CNC Folding Machine', href: '#products' },
      { name: 'Manual Folder', href: '#products' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Products', href: '#products' },
      { name: 'Features', href: '#features' },
      { name: 'Contact', href: '#contact' },
    ],
    support: [
      { name: 'Technical Support', href: '#contact' },
      { name: 'Request Quote', href: '#contact' },
      { name: 'Documentation', href: '#contact' },
      { name: 'Training', href: '#contact' },
    ],
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">ARTITECT</span>
                <span className="text-xs text-slate-400 font-medium tracking-widest -mt-1">MACHINERY</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Leading manufacturer of precision sheet metal folding machines. 
              Delivering quality, reliability, and innovation since 1999.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <a href="mailto:info@artitectmachinery.com" className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@artitectmachinery.com</span>
              </a>
              <a href="tel:+862112345678" className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+86 21 1234 5678</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>123 Industrial Drive<br />Shanghai, China 200000</span>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-slate-400 text-sm">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;