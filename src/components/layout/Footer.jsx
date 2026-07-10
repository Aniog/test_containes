import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    shop: [
      { label: 'All Jewelry', href: '/collection' },
      { label: 'Earrings', href: '/collection?category=earrings' },
      { label: 'Necklaces', href: '/collection?category=necklaces' },
      { label: 'Huggies', href: '/collection?category=huggies' },
      { label: 'Gift Sets', href: '/collection?category=sets' },
    ],
    help: [
      { label: 'Shipping & Returns', href: '/shipping' },
      { label: 'Size Guide', href: '/size-guide' },
      { label: 'Care Instructions', href: '/care' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
    company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Journal', href: '/journal' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
    ],
  };

  return (
    <footer className="bg-charcoal-900 text-ivory-100">
      {/* Newsletter Section */}
      <div className="border-b border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="font-serif text-2xl mb-2">Stay in the Glow</h3>
            <p className="text-charcoal-300 text-sm mb-6">
              Subscribe for exclusive access to new collections, special offers, and styling inspiration.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-700 text-ivory-100 placeholder:text-charcoal-500 focus:outline-none focus:border-champagne-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-champagne-500 text-charcoal-900 font-semibold text-xs tracking-ultra-wide uppercase hover:bg-champagne-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest text-ivory-100">
              VELMORA
            </Link>
            <p className="mt-4 text-charcoal-400 text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for the modern woman. Each piece is designed to be treasured, 
              worn, and loved for years to come.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-charcoal-400 hover:text-champagne-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="text-charcoal-400 hover:text-champagne-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="text-charcoal-400 hover:text-champagne-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-charcoal-400 mb-4">
              Shop
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-charcoal-300 hover:text-ivory-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-charcoal-400 mb-4">
              Help
            </h4>
            <ul className="space-y-3">
              {footerLinks.help.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-charcoal-300 hover:text-ivory-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-charcoal-400 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-charcoal-300 hover:text-ivory-100 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-500 text-xs">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-charcoal-500 text-xs">We accept</span>
              <div className="flex gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                  <div key={method} className="px-2 py-1 bg-charcoal-800 rounded text-xs text-charcoal-400">
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
