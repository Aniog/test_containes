import { Link } from 'react-router-dom';
import { Instagram, Pinterest, Youtube } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'];
const helpLinks = ['Shipping & Returns', 'Size Guide', 'Jewelry Care', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'];

export default function Footer() {
  return (
    <footer className="bg-velmora-espresso text-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/50 font-sans leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. 18k gold-plated pieces designed for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Pinterest">
                <Pinterest className="w-4 h-4" />
              </a>
              <a href="#" className="text-white/40 hover:text-velmora-gold transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'Shop', links: shopLinks },
            { title: 'Help', links: helpLinks },
            { title: 'Company', links: companyLinks },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-sans text-xs tracking-[0.15em] uppercase text-white/60 mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-white/40 hover:text-velmora-gold transition-colors font-sans"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-sans">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/30 font-sans">Visa</span>
            <span className="text-xs text-white/30 font-sans">Mastercard</span>
            <span className="text-xs text-white/30 font-sans">Amex</span>
            <span className="text-xs text-white/30 font-sans">PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
