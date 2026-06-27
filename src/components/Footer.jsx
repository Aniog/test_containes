import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Shop: ['Earrings', 'Necklaces', 'Huggies', 'New Arrivals', 'Best Sellers'],
    Help: ['FAQ', 'Shipping & Returns', 'Size Guide', 'Care Instructions', 'Contact Us'],
    Company: ['Our Story', 'Sustainability', 'Press', 'Wholesale', 'Careers']
  };

  return (
    <footer className="bg-velmora-black text-velmora-white">
      {/* Newsletter Section */}
      <div className="border-b border-velmora-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-4">
              Join the Velmora Family
            </h2>
            <p className="text-velmora-gray-400 mb-8">
              Subscribe for exclusive access, new arrivals, and 10% off your first order.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-velmora-charcoal border border-velmora-gray-700 text-velmora-white placeholder-velmora-gray-500 focus:outline-none focus:border-velmora-gold"
                required
              />
              <button
                type="submit"
                className="btn-premium bg-velmora-gold hover:bg-velmora-gold-dark text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl tracking-widest uppercase mb-4 block"
            >
              Velmora
            </Link>
            <p className="text-velmora-gray-400 text-sm mb-6">
              Demi-fine jewelry crafted to be treasured. Each piece is designed with intention,
              made with care, and meant to be worn every day.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-gray-400 hover:text-velmora-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-gray-400 hover:text-velmora-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-velmora-gray-400 hover:text-velmora-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-serif text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to={`/${title.toLowerCase()}`}
                      className="text-sm text-velmora-gray-400 hover:text-velmora-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment Icons & Copyright */}
        <div className="mt-12 pt-8 border-t border-velmora-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <CreditCard className="w-8 h-8 text-velmora-gray-400" />
            <span className="text-sm text-velmora-gray-400">
              Secure Payment Options
            </span>
          </div>

          <p className="text-sm text-velmora-gray-400">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
