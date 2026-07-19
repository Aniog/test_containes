import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6 text-center md:text-left">
            <Link to="/" className="font-serif text-2xl tracking-[0.2em]">
              VELMORA
            </Link>
            <p className="text-velmora-taupe text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              Demi-fine jewelry crafted for the modern woman. Quiet luxury, timeless design, and accessible quality.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-velmora-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-velmora-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-velmora-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="text-center md:text-left">
            <h3 className="serif-heading text-sm mb-6 tracking-widest text-velmora-gold">Shop</h3>
            <ul className="space-y-4 text-sm text-velmora-taupe tracking-wider">
              <li><Link to="/shop" className="hover:text-white transition-colors uppercase">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors uppercase">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors uppercase">Necklaces</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-white transition-colors uppercase">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="serif-heading text-sm mb-6 tracking-widest text-velmora-gold">Company</h3>
            <ul className="space-y-4 text-sm text-velmora-taupe tracking-wider">
              <li><Link to="/about" className="hover:text-white transition-colors uppercase">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-white transition-colors uppercase">The Journal</Link></li>
              <li><Link to="/sustainability" className="hover:text-white transition-colors uppercase">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors uppercase">Contact Us</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="text-center md:text-left">
            <h3 className="serif-heading text-sm mb-6 tracking-widest text-velmora-gold">Help</h3>
            <ul className="space-y-4 text-sm text-velmora-taupe tracking-wider">
              <li><Link to="/faq" className="hover:text-white transition-colors uppercase">FAQs</Link></li>
              <li><Link to="/shipping" className="hover:text-white transition-colors uppercase">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-white transition-colors uppercase">Jewelry Care</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors uppercase">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline-divide border-white/10 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-velmora-taupe uppercase tracking-[0.2em]">
          <p>© 2024 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6 transition-opacity opacity-60 hover:opacity-100">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
