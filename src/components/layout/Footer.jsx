import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const shopLinks = [
    { to: '/shop?category=earrings', label: 'Earrings' },
    { to: '/shop?category=necklaces', label: 'Necklaces' },
    { to: '/shop?category=huggies', label: 'Huggies' },
    { to: '/shop?category=sets', label: 'Sets' }
  ];

  const helpLinks = [
    { to: '/shipping', label: 'Shipping & Returns' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/care', label: 'Jewelry Care' }
  ];

  const companyLinks = [
    { to: '/about', label: 'Our Story' },
    { to: '/journal', label: 'Journal' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/careers', label: 'Careers' }
  ];

  return (
    <footer className="bg-primary text-text-light">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-text-light/70 text-sm leading-relaxed max-w-xs">
              Crafted to be treasured. We create timeless demi-fine jewelry designed to be worn and loved every day.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-text-light/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-text-light/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-text-light/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-serif text-sm tracking-widest mb-4">SHOP</h3>
            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-text-light/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="font-serif text-sm tracking-widest mb-4">HELP</h3>
            <ul className="space-y-3">
              {helpLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-text-light/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-serif text-sm tracking-widest mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-sm text-text-light/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-text-light/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-light/50">
            © {currentYear} Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Payment Icons Placeholder */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-text-light/50">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((card) => (
                <div 
                  key={card}
                  className="px-2 py-1 bg-text-light/10 text-xs text-text-light/70"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;