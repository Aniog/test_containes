import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];
const helpLinks = ['Shipping & Returns', 'Materials & Care', 'FAQ', 'Contact Us'];
const companyLinks = ['Our Story', 'Journal', 'Sustainability', 'Stockists'];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-2">
            <Link to="/" className="font-serif text-xl tracking-[0.2em] uppercase text-cream">
              Velmora
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/60 max-w-xs">
              Demi-fine jewelry crafted for the modern woman. Gold-plated pieces designed to be treasured, worn, and loved — every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-cream mb-4">Shop</h4>
            <ul className="space-y-2.5">
              {shopLinks.map((link) => (
                <li key={link}>
                  <Link to="/shop" className="text-sm text-cream/60 hover:text-accent transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-cream mb-4">Help</h4>
            <ul className="space-y-2.5">
              {helpLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-cream/60 cursor-pointer hover:text-accent transition-colors">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-xs tracking-[0.2em] uppercase text-cream mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-cream/60 cursor-pointer hover:text-accent transition-colors">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-cream/60 text-sm">
            <span>&copy; {new Date().getFullYear()} Velmora Fine Jewelry</span>
            <span className="cursor-pointer hover:text-accent transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-accent transition-colors">Terms</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-cream/40 text-xs tracking-wider">PAYMENT</span>
            <span className="text-cream/20 text-xs">Visa · MC · Amex · PayPal</span>
          </div>

          <div className="flex items-center gap-4 text-cream/60">
            <Instagram size={16} className="cursor-pointer hover:text-accent transition-colors" />
            <Facebook size={16} className="cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}
