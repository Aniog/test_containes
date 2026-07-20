import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: 'Earrings', to: '/shop?category=earrings' },
    { label: 'Necklaces', to: '/shop?category=necklaces' },
    { label: 'Huggies', to: '/shop?category=huggies' },
    { label: 'Gift Sets', to: '/shop?category=sets' },
    { label: 'New Arrivals', to: '/shop' },
  ],
  Help: [
    { label: 'Shipping & Returns', to: '/' },
    { label: 'Size Guide', to: '/' },
    { label: 'Care Instructions', to: '/' },
    { label: 'FAQ', to: '/' },
    { label: 'Contact Us', to: '/' },
  ],
  Company: [
    { label: 'Our Story', to: '/#about' },
    { label: 'Sustainability', to: '/' },
    { label: 'Press', to: '/' },
    { label: 'Careers', to: '/' },
    { label: 'Journal', to: '/' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-velvet text-mist">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2 space-y-5">
            <Link to="/" className="font-serif text-2xl tracking-widest2 text-champagne font-light">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-stone leading-relaxed max-w-xs mt-4">
              Demi-fine jewelry crafted for the modern woman. 18K gold plated, hypoallergenic, and made to be treasured.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-stone hover:text-champagne transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-stone hover:text-champagne transition-colors">
                <Facebook size={18} />
              </a>
              {/* Pinterest icon via text */}
              <a href="#" aria-label="Pinterest" className="text-stone hover:text-champagne transition-colors font-sans text-sm font-medium">
                P
              </a>
              <a href="#" aria-label="TikTok" className="text-stone hover:text-champagne transition-colors font-sans text-sm font-medium">
                TT
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h4 className="font-sans text-xs tracking-widest uppercase text-champagne font-semibold">
                {heading}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-stone hover:text-mist transition-colors duration-200"
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
      <div className="border-t hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-stone">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['VISA', 'MC', 'AMEX', 'PAYPAL', 'APPLE PAY'].map((p) => (
              <span
                key={p}
                className="font-sans text-[9px] tracking-wider text-stone/60 border border-stone/20 px-1.5 py-0.5 rounded-sm"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex gap-6">
            <a href="#" className="font-sans text-xs text-stone hover:text-mist transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-stone hover:text-mist transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
