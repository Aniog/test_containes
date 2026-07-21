import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = [
  { name: 'All Jewelry', path: '/shop' },
  { name: 'Earrings', path: '/shop?category=earrings' },
  { name: 'Necklaces', path: '/shop?category=necklaces' },
  { name: 'Huggies', path: '/shop?category=huggies' },
  { name: 'Gift Sets', path: '/shop?category=sets' },
];

const helpLinks = [
  { name: 'Shipping & Returns', path: '#' },
  { name: 'Size Guide', path: '#' },
  { name: 'FAQ', path: '#' },
  { name: 'Contact Us', path: '#' },
  { name: 'Track Order', path: '#' },
];

const companyLinks = [
  { name: 'Our Story', path: '/#about' },
  { name: 'Sustainability', path: '#' },
  { name: 'Press', path: '#' },
  { name: 'Careers', path: '#' },
  { name: 'Journal', path: '/#journal' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-cream-200">
      {/* Newsletter */}
      <div className="border-b border-ink-600/30">
        <div className="section-padding section-padding-y flex flex-col md:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl md:text-3xl text-cream-100">Join the Velmora Circle</p>
            <p className="text-sm text-cream-300/70 mt-1">Get 10% off your first order + early access to new drops</p>
          </div>
          <form className="flex w-full md:w-auto gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-72 px-5 py-3 bg-ink-700 border border-ink-500/30 text-cream-100 placeholder-ink-300 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              aria-label="Email address"
            />
            <button type="submit" className="btn-gold px-6 py-3 text-xs">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="section-padding py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & social */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-ultra-wide text-cream-50">
              VELMORA
            </Link>
            <p className="text-sm text-cream-300/60 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday elegance.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-cream-300/50 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300/50 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-cream-300/50 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-100 mb-5">Shop</h4>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-cream-300/60 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-100 mb-5">Help</h4>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-cream-300/60 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-ultra-wide uppercase text-cream-100 mb-5">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm text-cream-300/60 hover:text-gold-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-600/30">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-xs text-cream-300/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-cream-300/40">Privacy Policy</span>
            <span className="text-xs text-cream-300/40">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
