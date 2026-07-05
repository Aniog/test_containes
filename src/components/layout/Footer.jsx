import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/shipping' },
    { label: 'Size Guide', to: '/size-guide' },
    { label: 'Care Instructions', to: '/care' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Contact Us', to: '/contact' },
  ],
  Company: [
    { label: 'Our Story', to: '/about' },
    { label: 'Sustainability', to: '/sustainability' },
    { label: 'Press', to: '/press' },
    { label: 'Affiliates', to: '/affiliates' },
    { label: 'Journal', to: '/journal' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-mink/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em] text-parchment hover:text-gold transition-colors duration-300 font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-stone hover:text-gold transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-stone hover:text-gold transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone hover:text-gold transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[10px] tracking-widest uppercase text-parchment font-medium mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs text-stone hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-mink/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-stone tracking-wide">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="px-2 py-1 border border-mink/60 rounded-sm text-[8px] tracking-wider text-stone/60 font-medium"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-[10px] text-stone hover:text-gold transition-colors duration-300 tracking-wide">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[10px] text-stone hover:text-gold transition-colors duration-300 tracking-wide">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
