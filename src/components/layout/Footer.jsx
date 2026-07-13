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
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#about' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Affiliates', href: '/' },
    { label: 'Privacy Policy', href: '/' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

export default function Footer() {
  return (
    <footer className="bg-velmora-obsidian text-velmora-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-light tracking-[0.2em] uppercase text-velmora-ivory block mb-4">
              Velmora
            </Link>
            <p className="text-xs text-velmora-mist leading-relaxed mb-6 max-w-xs">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and made to be treasured.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-velmora-mist hover:text-velmora-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-velmora-mist hover:text-velmora-gold transition-colors duration-200">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-velmora-mist hover:text-velmora-gold transition-colors duration-200">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-widest uppercase font-semibold text-velmora-sand mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-xs text-velmora-mist hover:text-velmora-gold transition-colors duration-200 leading-relaxed"
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
      <div className="border-t border-velmora-stone/40">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map(icon => (
              <div
                key={icon}
                className="bg-velmora-charcoal border border-velmora-stone/40 rounded-sm px-2 py-1 text-[9px] font-semibold text-velmora-mist tracking-wider"
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
