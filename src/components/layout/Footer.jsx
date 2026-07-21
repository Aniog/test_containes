import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=new' },
    { name: 'Bestsellers', path: '/shop?sort=bestsellers' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Guide', path: '/care' },
    { name: 'Size Guide', path: '/sizing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <footer className="bg-[rgb(var(--color-foreground))] text-white pt-16 pb-8">
      <div className="container-velmora">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-3xl tracking-[0.2em] block mb-6">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-white/70 mb-6 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Each piece is designed with intention,
              made with care, and meant to be worn every day.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[rgb(var(--color-accent))] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[rgb(var(--color-accent))] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[rgb(var(--color-accent))] transition-colors text-sm uppercase tracking-wider">
                Pt
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-wider mb-6">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-sans text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-white/50">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-white/50 text-xs">
              <span>Secure payments:</span>
              <span>VISA</span>
              <span>·</span>
              <span>MC</span>
              <span>·</span>
              <span>AMEX</span>
              <span>·</span>
              <span>PP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
