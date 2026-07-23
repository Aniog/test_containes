import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const shopLinks = ['All Jewelry', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'];
const helpLinks = ['Shipping & Returns', 'Care Guide', 'FAQ', 'Contact Us', 'Track Order'];
const companyLinks = ['Our Story', 'Sustainability', 'Press', 'Careers', 'Wholesale'];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto px-5 md:px-8 lg:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-[0.18em] font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-taupe max-w-xs leading-relaxed">
              Demi-fine gold jewelry designed for modern women. Crafted to be treasured, gifted, and worn every day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" strokeWidth={1.6} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold-400 transition-colors">
                <Facebook className="w-5 h-5" strokeWidth={1.6} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold-400 transition-colors">
                <Twitter className="w-5 h-5" strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5">Shop</h3>
            <ul className="space-y-3 text-sm text-taupe">
              {shopLinks.map((l) => (
                <li key={l}>
                  <Link to="/shop" className="hover:text-cream transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5">Help</h3>
            <ul className="space-y-3 text-sm text-taupe">
              {helpLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-cream transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-sm text-taupe">
              {companyLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-cream transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-charcoal flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-taupe">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((p) => (
              <span
                key={p}
                className="px-2 py-1 bg-charcoal text-[10px] text-taupe rounded"
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
