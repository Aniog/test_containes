import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const shopLinks = [
    { name: 'Earrings', path: '/shop?category=earrings' },
    { name: 'Necklaces', path: '/shop?category=necklaces' },
    { name: 'Huggies', path: '/shop?category=huggies' },
    { name: 'Sets', path: '/shop?category=sets' },
    { name: 'Gift Cards', path: '/gift-cards' },
  ];

  const helpLinks = [
    { name: 'Shipping & Returns', path: '/shipping' },
    { name: 'Size Guide', path: '/size-guide' },
    { name: 'Care Instructions', path: '/care' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const companyLinks = [
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Press', path: '/press' },
    { name: 'Careers', path: '/careers' },
  ];

  const paymentIcons = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Amex', icon: '💳' },
    { name: 'PayPal', icon: '💳' },
    { name: 'Apple Pay', icon: '💳' },
  ];

  return (
    <footer className="bg-charcoal-900 text-cream-100">
      {/* Newsletter section */}
      <div className="border-b border-charcoal-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-gold-500 text-xs font-sans tracking-[0.2em] uppercase mb-3">
              Join the Velmora Circle
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream-50 mb-4">
              Get 10% Off Your First Order
            </h3>
            <p className="text-cream-300 text-sm mb-6">
              Subscribe for exclusive access to new collections, styling tips, and special offers.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal-800 border border-charcoal-700 text-cream-100 text-sm font-sans placeholder:text-charcoal-500 focus:outline-none focus:border-gold-600 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-600 text-charcoal-950 font-sans text-xs tracking-[0.1em] uppercase font-medium hover:bg-gold-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.15em] text-cream-50">
              VELMORA
            </Link>
            <p className="mt-4 text-cream-400 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="text-cream-400 hover:text-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-cream-400 hover:text-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-cream-400 hover:text-gold-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-cream-200 mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-cream-200 mb-4">
              Help
            </h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-cream-200 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-cream-400 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-cream-500 text-xs">
              © 2024 Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              {paymentIcons.map((icon) => (
                <div
                  key={icon.name}
                  className="w-10 h-6 bg-charcoal-800 rounded flex items-center justify-center text-[10px]"
                  title={icon.name}
                >
                  {icon.name.slice(0, 2)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
