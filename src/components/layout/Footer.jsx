import { Link } from 'react-router-dom';
import { Instagram, Facebook, Pinterest } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', to: '/shop' },
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
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
    { label: 'Affiliates', to: '/#' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-warm-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest-xl text-velmora-warm-white font-light">
              VELMORA
            </Link>
            <p className="font-sans text-xs text-velmora-mist leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-velmora-mist hover:text-velmora-gold transition-colors">
                <Pinterest size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-warm-white mb-5 font-medium">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-xs text-velmora-mist hover:text-velmora-gold transition-colors"
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
      <div className="border-t border-velmora-stone/60">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-velmora-stone">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="bg-velmora-stone/40 text-velmora-mist font-sans text-[9px] tracking-wider px-2 py-1 rounded-sm"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-velmora-stone hover:text-velmora-mist transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-velmora-stone hover:text-velmora-mist transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
