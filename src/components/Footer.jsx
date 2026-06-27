import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

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
    <footer className="bg-[#2C2C2C] text-[#FAF7F2] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-2xl tracking-wider text-[#C9A96E] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[#9A9590] mb-6">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention, 
              made with 18k gold plated materials that are hypoallergenic and built to last.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#9A9590] hover:text-[#C9A96E] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#9A9590] hover:text-[#C9A96E] transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#C9A96E]">Shop</h3>
            <ul className="space-y-2">
              {shopLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#9A9590] hover:text-[#FAF7F2] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#C9A96E]">Help</h3>
            <ul className="space-y-2">
              {helpLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#9A9590] hover:text-[#FAF7F2] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#C9A96E]">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-[#9A9590] hover:text-[#FAF7F2] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-[#3C3C3C] pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm text-[#9A9590]">Secure payment:</span>
            <div className="flex space-x-2">
              <div className="w-10 h-6 bg-[#3C3C3C] rounded flex items-center justify-center text-xs text-[#9A9590]">
                VISA
              </div>
              <div className="w-10 h-6 bg-[#3C3C3C] rounded flex items-center justify-center text-xs text-[#9A9590]">
                MC
              </div>
              <div className="w-10 h-6 bg-[#3C3C3C] rounded flex items-center justify-center text-xs text-[#9A9590]">
                AMEX
              </div>
              <div className="w-10 h-6 bg-[#3C3C3C] rounded flex items-center justify-center text-xs text-[#9A9590]">
                PayPal
              </div>
            </div>
          </div>
          
          <p className="text-sm text-[#9A9590]">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
