import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base text-white">
      <div className="max-w-container mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest uppercase">
              Velmora
            </Link>
            <p className="mt-4 font-sans text-sm text-white/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn,
              loved, and treasured.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-label text-white/50 mb-5">
              Shop
            </h4>
            <ul className="space-y-3">
              {['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'].map((item) => (
                <li key={item}>
                  <Link
                    to="/shop"
                    className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-label text-white/50 mb-5">
              Help
            </h4>
            <ul className="space-y-3">
              {['Shipping & Returns', 'Care Guide', 'Size Guide', 'FAQ', 'Contact Us'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-label text-white/50 mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['Our Story', 'Sustainability', 'Press', 'Careers', 'Affiliates'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-sans text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((brand) => (
              <span
                key={brand}
                className="px-2.5 py-1 border border-white/20 rounded text-[10px] font-sans text-white/50"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
