import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const footerColumns = [
    {
      title: 'Shop',
      links: [
        { name: 'Earrings', path: '/shop?category=Earrings' },
        { name: 'Necklaces', path: '/shop?category=Necklaces' },
        { name: 'Huggies', path: '/shop?category=Huggies' },
        { name: 'New Arrivals', path: '/shop?sort=newest' },
        { name: 'Best Sellers', path: '/shop?sort=bestsellers' }
      ]
    },
    {
      title: 'Help',
      links: [
        { name: 'FAQs', path: '/faqs' },
        { name: 'Shipping & Returns', path: '/shipping' },
        { name: 'Size Guide', path: '/size-guide' },
        { name: 'Care Instructions', path: '/care' },
        { name: 'Contact Us', path: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Velmora', path: '/about' },
        { name: 'Our Journal', path: '/journal' },
        { name: 'Sustainability', path: '/sustainability' },
        { name: 'Press', path: '/press' },
        { name: 'Careers', path: '/careers' }
      ]
    }
  ];

  return (
    <footer className="bg-[#2d2d2d] text-white pt-20 pb-10">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="font-serif text-3xl tracking-wider block mb-6">
              VELMORA
            </Link>
            <p className="font-light text-sm opacity-70 mb-8 leading-relaxed">
              Timeless demi-fine jewelry crafted to be treasured. 
              Each piece designed for life's most meaningful moments.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#c9a96e] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#c9a96e] transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-serif text-lg mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm opacity-70 hover:opacity-100 hover:text-[#c9a96e] transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Icons & Copyright */}
        <div className="border-t border-white border-opacity-10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 opacity-50">
            <span className="text-xs">VISA</span>
            <span className="text-xs">MASTERCARD</span>
            <span className="text-xs">AMEX</span>
            <span className="text-xs">PAYPAL</span>
            <span className="text-xs">APPLE PAY</span>
          </div>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
