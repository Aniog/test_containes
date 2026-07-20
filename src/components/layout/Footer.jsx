import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'New Arrivals', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/#' },
    { label: 'Size Guide', to: '/#' },
    { label: 'Care Instructions', to: '/#' },
    { label: 'FAQ', to: '/#' },
    { label: 'Contact Us', to: '/#' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '/#' },
    { label: 'Press', to: '/#' },
    { label: 'Careers', to: '/#' },
    { label: 'Journal', to: '/#' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-cream/80">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="font-serif text-2xl font-light tracking-ultra-wide uppercase text-cream">
              Velmora
            </Link>
            <p className="font-sans text-sm text-cream/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Wear it every day. Treasure it forever.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                aria-label="Instagram"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-cream/50 hover:text-gold transition-colors duration-300"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="font-sans text-xs tracking-widest uppercase text-cream/40 font-medium">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-cream/60 hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/30 flex items-center gap-1">
            © 2026 Velmora Fine Jewelry. Made with <Heart size={10} className="text-gold fill-gold" /> for the modern woman.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="bg-cream/10 border border-cream/10 rounded px-2 py-1 font-sans text-[9px] text-cream/40 tracking-wider"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
