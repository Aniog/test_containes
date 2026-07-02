import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-dark text-white/80">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest text-white block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed in New York, worn everywhere.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-white/40 mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-white/40 mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {['Shipping & Returns', 'Size Guide', 'Care Instructions', 'FAQ', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="/"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs font-medium tracking-widest uppercase text-white/40 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {['Our Story', 'Sustainability', 'Journal', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/30 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30">We accept</span>
            <div className="flex items-center gap-2">
              {['VISA', 'MC', 'AMEX', 'PP'].map((card) => (
                <span
                  key={card}
                  className="px-2 py-0.5 border border-white/20 rounded text-[10px] text-white/40 font-medium"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
