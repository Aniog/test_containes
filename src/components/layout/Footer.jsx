import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => (
  <footer className="bg-charcoal-950 text-charcoal-300 pt-20 pb-10">
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-serif text-cream text-xl tracking-super mb-4">VELMORA</h3>
          <p className="text-sm text-charcoal-400 leading-relaxed max-w-[220px]">
            Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday elegance.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-cream font-medium mb-4">Shop</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/shop?category=earrings" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Earrings</Link>
            <Link to="/shop?category=necklaces" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Necklaces</Link>
            <Link to="/shop?category=sets" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Gift Sets</Link>
            <Link to="/shop" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">All Jewelry</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-cream font-medium mb-4">Help</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Shipping & Returns</Link>
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Care Guide</Link>
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Size Guide</Link>
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Contact Us</Link>
          </div>
        </div>

        <div>
          <h4 className="text-xs tracking-widest uppercase text-cream font-medium mb-4">Company</h4>
          <div className="flex flex-col gap-2.5">
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Our Story</Link>
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Sustainability</Link>
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Journal</Link>
            <Link to="/" className="text-sm text-charcoal-400 hover:text-gold-400 transition-colors">Wholesale</Link>
          </div>
        </div>
      </div>

      <hr className="hairline bg-charcoal-800 mb-8" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-xs text-charcoal-500">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>PayPal</span>
          <span>Apple Pay</span>
        </div>

        <div className="flex items-center gap-5">
          <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Instagram">
            <Instagram size={16} />
          </a>
          <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors" aria-label="Facebook">
            <Facebook size={16} />
          </a>
          <a href="#" className="text-charcoal-400 hover:text-gold-400 transition-colors text-xs tracking-widest uppercase" aria-label="Pinterest">
            Pin
          </a>
        </div>

        <p className="text-xs text-charcoal-500">&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;