import { Link } from 'react-router-dom';

const shopLinks = [
  { href: '/shop', label: 'All Jewelry' },
  { href: '/collections/earrings', label: 'Earrings' },
  { href: '/collections/necklaces', label: 'Necklaces' },
  { href: '/collections/huggies', label: 'Huggies' },
  { href: '/collections/sets', label: 'Gift Sets' },
];

const helpLinks = [
  { href: '/shipping', label: 'Shipping & Returns' },
  { href: '/sizing', label: 'Ring Sizing' },
  { href: '/care', label: 'Jewelry Care' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact Us' },
];

const companyLinks = [
  { href: '/about', label: 'Our Story' },
  { href: '/journal', label: 'Journal' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/press', label: 'Press' },
  { href: '/careers', label: 'Careers' },
];

const socialLinks = [
  { href: 'https://instagram.com', label: 'Instagram', icon: 'IG' },
  { href: 'https://pinterest.com', label: 'Pinterest', icon: 'Pin' },
  { href: 'https://tiktok.com', label: 'TikTok', icon: 'TT' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-charcoal-300 max-w-xs leading-relaxed">
              Crafted to be treasured. Premium demi-fine jewelry designed for the modern woman who appreciates understated luxury.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-charcoal-600 flex items-center justify-center text-xs font-medium text-charcoal-300 hover:border-gold-500 hover:text-gold-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-4">Shop</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xs tracking-ultra-wide uppercase text-charcoal-400 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-charcoal-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-charcoal-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-xs text-charcoal-500">
              © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            
            {/* Payment Icons */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-charcoal-500">We Accept</span>
              <div className="flex items-center gap-2">
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-400 font-medium">VISA</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-400 font-medium">MC</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-400 font-medium">AMEX</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-400 font-medium">PayPal</div>
                <div className="px-2 py-1 bg-charcoal-700 rounded text-xs text-charcoal-400 font-medium">Apple Pay</div>
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs text-charcoal-500 hover:text-charcoal-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
