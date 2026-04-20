import React from 'react';
import { Zap, Twitter, Instagram, Youtube, Github, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
  Products: ['Wireless Earbuds', 'Mechanical Keyboards', '4K Monitors', 'Power Banks', 'Smart Watches'],
  Support: ['Help Center', 'Track Order', 'Returns & Refunds', 'Warranty', 'Contact Us'],
  Company: ['About NovaTech', 'Careers', 'Press Kit', 'Blog', 'Affiliates'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-white/5">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                NOVA<span className="text-blue-400">TECH</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium consumer electronics engineered for those who demand more. Performance without compromise.
            </p>
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Youtube, href: '#' },
                { icon: Github, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href + Icon.name}
                  href={href}
                  className="w-9 h-9 bg-gray-900 hover:bg-blue-500/20 border border-white/5 hover:border-blue-500/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-600" />
                <span>1 Infinite Loop, Cupertino, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-600" />
                <span>hello@novatech.io</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gray-600" />
                <span>+1 (800) 668-2832</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 NovaTech Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Payment icons */}
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="bg-gray-900 border border-white/5 text-gray-500 text-xs px-2.5 py-1 rounded-lg font-medium"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
