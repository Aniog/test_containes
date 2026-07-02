import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl uppercase tracking-extra-wide">
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream/70 max-w-xs">
              Demi-fine jewelry crafted to be treasured. Designed for everyday luxury and meaningful gifting.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-extra-wide font-medium mb-5">Shop</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/collections/earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-extra-wide font-medium mb-5">Help</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-extra-wide font-medium mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-cream/70">
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs text-cream/50 uppercase tracking-wide">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((icon) => (
                <span
                  key={icon}
                  className="bg-cream/10 text-cream/80 text-[10px] uppercase tracking-wide px-2 py-1"
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://instagram.com/velmorajewelry" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://facebook.com/velmorajewelry" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
              <Facebook size={18} />
            </a>
            <a href="https://x.com/velmorajewelry" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
              <Twitter size={18} />
            </a>
          </div>

          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
