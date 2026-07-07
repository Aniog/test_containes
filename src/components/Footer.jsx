import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard, Truck, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Bestsellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Guide', path: '/care' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Size Guide', path: '/size-guide' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Wholesale', path: '/wholesale' },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-cream">
      {/* Trust Badges */}
      <div className="border-b border-velmora-charcoal-light/30">
        <div className="container-padding py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Truck size={24} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">Free Worldwide Shipping</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheck size={24} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CreditCard size={24} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">Secure Payment</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <ShieldCheck size={24} className="text-velmora-gold" />
              <span className="font-sans text-xs tracking-wide uppercase">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase text-velmora-cream">
              Velmora
            </Link>
            <p className="font-sans text-sm text-velmora-stone leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, and designed for everyday luxury.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-gold">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-stone hover:text-velmora-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-gold">
              Help
            </h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-stone hover:text-velmora-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-velmora-gold">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-velmora-stone hover:text-velmora-cream transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-velmora-charcoal-light/30">
        <div className="container-padding py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="font-sans text-xs text-velmora-stone">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="font-sans text-xs text-velmora-stone">Payment methods:</span>
            <div className="flex space-x-2 text-velmora-stone">
              <span className="text-xs border border-velmora-stone/30 px-2 py-1 rounded">VISA</span>
              <span className="text-xs border border-velmora-stone/30 px-2 py-1 rounded">MC</span>
              <span className="text-xs border border-velmora-stone/30 px-2 py-1 rounded">AMEX</span>
              <span className="text-xs border border-velmora-stone/30 px-2 py-1 rounded">PP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
