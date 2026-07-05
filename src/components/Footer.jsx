import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=Earrings' },
    { name: 'Necklaces', path: '/shop?category=Necklaces' },
    { name: 'Huggies', path: '/shop?category=Huggies' },
    { name: 'New Arrivals', path: '/shop?sort=newest' },
    { name: 'Best Sellers', path: '/shop?sort=bestsellers' }
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq' },
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Care Guide', path: '/care' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Track Order', path: '/track' }
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Wholesale', path: '/wholesale' }
  ];

  return (
    <footer className="bg-[rgb(var(--color-foreground))] text-[rgb(var(--color-background))] py-16 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3
              className="text-2xl mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              VELMORA
            </h3>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18k gold plated materials that are hypoallergenic and built to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Pinterest">
                <Pinterest size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-wider opacity-60">Secure Payment:</span>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-white/20 rounded text-xs flex items-center justify-center">
                VISA
              </div>
              <div className="w-10 h-6 bg-white/20 rounded text-xs flex items-center justify-center">
                MC
              </div>
              <div className="w-10 h-6 bg-white/20 rounded text-xs flex items-center justify-center">
                AMEX
              </div>
              <div className="w-10 h-6 bg-white/20 rounded text-xs flex items-center justify-center">
                PP
              </div>
            </div>
          </div>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
