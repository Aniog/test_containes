import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, RefreshCw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Best Sellers', path: '/shop?sort=bestsellers' },
      ],
    },
    {
      title: 'Help',
      links: [
        { name: 'Shipping Info', path: '/shipping' },
        { name: 'Returns', path: '/returns' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Velmora', path: '/about' },
        { name: 'Our Materials', path: '/materials' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Journal', path: '/journal' },
      ],
    },
  ];

  return (
    <footer className="bg-[#2A2520] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/20">
          {[
            { icon: Truck, text: 'Free Worldwide Shipping' },
            { icon: RefreshCw, text: '30-Day Returns' },
            { icon: CreditCard, text: 'Secure Payment' },
            { icon: CreditCard, text: '18K Gold Plated' },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <badge.icon size={24} className="text-[#B8860B]" />
              <span className="text-sm">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif-display text-3xl tracking-wider text-white mb-4 block">
              VELMORA
            </Link>
            <p className="text-sm text-white/70 mb-6">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with care, and meant to be worn every day.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8860B] transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-serif-display text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-white/70 hover:text-[#B8860B] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/50">
          <p>© {currentYear} Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
