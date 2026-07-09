import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', href: '/shop' },
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Care Instructions', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Contact Us', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '#about' },
    { label: 'Sustainability', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Affiliates', href: '#' },
  ],
};

const paymentMethods = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-cormorant text-2xl font-light tracking-widest-xl uppercase text-velmora-ivory">
              VELMORA
            </Link>
            <p className="font-cormorant text-base italic font-light text-velmora-stone mt-2 mb-5">
              Crafted to be Treasured
            </p>
            <p className="font-manrope text-xs text-velmora-stone leading-relaxed max-w-xs">
              Demi-fine gold jewelry designed for the modern woman. Hypoallergenic, 18K gold-plated, made to last.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-velmora-stone hover:text-velmora-gold transition-colors duration-200">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter" className="text-velmora-stone hover:text-velmora-gold transition-colors duration-200">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-stone hover:text-velmora-gold transition-colors duration-200">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-manrope text-xs text-velmora-stone hover:text-velmora-ivory transition-colors duration-200"
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
      <div className="border-t border-velmora-charcoal">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-velmora-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentMethods.map((method) => (
              <div
                key={method}
                className="px-2 py-1 border border-velmora-charcoal rounded-sm"
              >
                <span className="font-manrope text-[9px] text-velmora-stone uppercase tracking-wide">{method}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-manrope text-xs text-velmora-stone hover:text-velmora-ivory transition-colors">Privacy</a>
            <a href="#" className="font-manrope text-xs text-velmora-stone hover:text-velmora-ivory transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
