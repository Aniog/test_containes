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
    { label: 'Shipping & Returns', href: '/' },
    { label: 'Size Guide', href: '/' },
    { label: 'Care Instructions', href: '/' },
    { label: 'FAQ', href: '/' },
    { label: 'Contact Us', href: '/' },
  ],
  Company: [
    { label: 'Our Story', href: '/#story' },
    { label: 'Sustainability', href: '/' },
    { label: 'Press', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Affiliates', href: '/' },
  ],
};

const paymentIcons = ['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE'];

const Footer = () => (
  <footer className="bg-velmora-obsidian text-velmora-cream">
    {/* Main footer */}
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-2">
          <Link to="/" className="font-cormorant text-2xl tracking-widest-xl text-velmora-cream">
            VELMORA
          </Link>
          <p className="font-manrope text-xs text-velmora-whisper leading-relaxed mt-4 max-w-xs">
            Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-velmora-whisper hover:text-velmora-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-velmora-whisper hover:text-velmora-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-velmora-whisper hover:text-velmora-gold transition-colors">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-manrope text-[10px] uppercase tracking-widest text-velmora-gold mb-4">
              {title}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map(link => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-manrope text-xs text-velmora-whisper hover:text-velmora-cream transition-colors"
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
    <div className="border-t border-velmora-stone">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-manrope text-[10px] text-velmora-stone">
          © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
        </p>

        {/* Payment icons */}
        <div className="flex items-center gap-2">
          {paymentIcons.map(icon => (
            <div
              key={icon}
              className="px-2 py-1 border border-velmora-stone rounded-sm"
            >
              <span className="font-manrope text-[9px] text-velmora-stone tracking-wider">{icon}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="font-manrope text-[10px] text-velmora-stone hover:text-velmora-whisper transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="font-manrope text-[10px] text-velmora-stone hover:text-velmora-whisper transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
