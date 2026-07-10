import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'All Jewelry', path: '/shop' },
    { label: 'Earrings', path: '/shop?category=earrings' },
    { label: 'Necklaces', path: '/shop?category=necklaces' },
    { label: 'Huggies', path: '/shop?category=huggies' },
    { label: 'Gift Sets', path: '/shop?category=sets' },
  ],
  Help: [
    { label: 'Shipping & Returns', path: '/' },
    { label: 'Size Guide', path: '/' },
    { label: 'Care Instructions', path: '/' },
    { label: 'FAQ', path: '/' },
    { label: 'Contact Us', path: '/' },
  ],
  Company: [
    { label: 'Our Story', path: '/' },
    { label: 'Sustainability', path: '/' },
    { label: 'Press', path: '/' },
    { label: 'Careers', path: '/' },
    { label: 'Journal', path: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-cormorant text-2xl tracking-[0.18em] uppercase text-ivory block mb-4">
              Velmora
            </Link>
            <p className="font-inter text-xs text-ivory/60 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Worn daily, treasured always.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-inter text-[10px] uppercase tracking-widest text-gold mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="font-inter text-xs text-ivory/60 hover:text-ivory transition-colors"
                    >
                      {label}
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-[10px] text-ivory/40 tracking-wide">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-inter text-[10px] text-ivory/40">Made with</span>
            <Heart size={10} className="text-gold fill-gold" />
            <span className="font-inter text-[10px] text-ivory/40">for jewelry lovers</span>
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map((p) => (
              <span
                key={p}
                className="font-inter text-[8px] tracking-wider text-ivory/40 border border-ivory/20 px-1.5 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
