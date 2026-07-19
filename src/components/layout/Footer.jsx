import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', href: '/shop?category=earrings' },
    { label: 'Necklaces', href: '/shop?category=necklaces' },
    { label: 'Huggies', href: '/shop?category=huggies' },
    { label: 'Gift Sets', href: '/shop?category=sets' },
    { label: 'New Arrivals', href: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', href: '/#' },
    { label: 'Size Guide', href: '/#' },
    { label: 'Care Instructions', href: '/#' },
    { label: 'FAQ', href: '/#' },
    { label: 'Contact Us', href: '/#' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Journal', href: '/#journal' },
    { label: 'Sustainability', href: '/#' },
    { label: 'Press', href: '/#' },
    { label: 'Careers', href: '/#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-medium tracking-[0.2em] uppercase text-ivory block mb-4"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-ivory/50 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the everyday woman.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-ivory/40 hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-ivory/40 hover:text-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-ivory/40 hover:text-gold transition-colors duration-300">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-inter text-[10px] uppercase tracking-[0.15em] text-ivory/40 mb-4">
                {title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-inter text-xs text-ivory/60 hover:text-gold transition-colors duration-300"
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
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[10px] text-ivory/30">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal', 'Apple Pay'].map(p => (
              <span
                key={p}
                className="font-inter text-[9px] uppercase tracking-wide text-ivory/30 border border-ivory/10 px-2 py-1"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Link to="/#" className="font-inter text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors">
              Privacy
            </Link>
            <Link to="/#" className="font-inter text-[10px] text-ivory/30 hover:text-ivory/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
