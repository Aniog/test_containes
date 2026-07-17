import React from 'react';
import { Facebook, Instagram, Twitter, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  const shopLinks = [
    { name: 'Earrings', href: '/shop?category=earrings' },
    { name: 'Necklaces', href: '/shop?category=necklaces' },
    { name: 'Huggies', href: '/shop?category=huggies' },
    { name: 'New Arrivals', href: '/shop?sort=new' },
    { name: 'Best Sellers', href: '/shop?sort=bestsellers' }
  ];

  const helpLinks = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Care Instructions', href: '/care' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const companyLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Press', href: '/press' },
    { name: 'Careers', href: '/careers' },
    { name: 'Journal', href: '/journal' }
  ];

  return (
    <footer className="bg-charcoal text-cream py-20">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <h3 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h3>
            <p className="text-sm text-warm-gray mb-8 leading-relaxed">
              Quiet luxury, thoughtfully crafted. Demi-fine jewelry designed to be treasured, worn, and loved.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-cream hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-cream hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-cream hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-warm-gray hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-warm-gray hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-sans text-xs tracking-widest uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-warm-gray hover:text-cream transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Trust Badges */}
        <div className="border-t border-warm-gray/20 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-warm-gray">
                <CreditCard size={16} />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-warm-gray">
                <Shield size={16} />
                <span>SSL Encrypted</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-warm-gray uppercase tracking-wider">We Accept</span>
              <div className="flex gap-2">
                <div className="w-10 h-6 bg-warm-gray/20 rounded flex items-center justify-center text-xs text-warm-gray">
                  VISA
                </div>
                <div className="w-10 h-6 bg-warm-gray/20 rounded flex items-center justify-center text-xs text-warm-gray">
                  MC
                </div>
                <div className="w-10 h-6 bg-warm-gray/20 rounded flex items-center justify-center text-xs text-warm-gray">
                  AMEX
                </div>
                <div className="w-10 h-6 bg-warm-gray/20 rounded flex items-center justify-center text-xs text-warm-gray">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-warm-gray/20 pt-8 text-center">
          <p className="text-xs text-warm-gray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
