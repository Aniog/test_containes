import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-cream border-t border-velmora-charcoal/5 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif tracking-[0.2em]">VELMORA</h2>
            <p className="text-velmora-charcoal/60 text-sm leading-relaxed max-w-xs">
              Meticulously crafted gold-plated jewelry designed for those who appreciate quiet luxury and timeless elegance.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} strokeWidth={1.5} className="hover:opacity-60 cursor-pointer transition-opacity" />
              <Facebook size={20} strokeWidth={1.5} className="hover:opacity-60 cursor-pointer transition-opacity" />
              <Twitter size={20} strokeWidth={1.5} className="hover:opacity-60 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-6">
            <h3 className="font-serif uppercase tracking-widest text-sm">Shop</h3>
            <ul className="space-y-4 text-sm text-velmora-charcoal/60">
              <li><Link to="/shop" className="hover:text-velmora-charcoal transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-velmora-charcoal transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-velmora-charcoal transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=new" className="hover:text-velmora-charcoal transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <h3 className="font-serif uppercase tracking-widest text-sm">Customer Care</h3>
            <ul className="space-y-4 text-sm text-velmora-charcoal/60">
              <li><Link to="/shipping" className="hover:text-velmora-charcoal transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-velmora-charcoal transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faqs" className="hover:text-velmora-charcoal transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-velmora-charcoal transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="font-serif uppercase tracking-widest text-sm">Company</h3>
            <ul className="space-y-4 text-sm text-velmora-charcoal/60">
              <li><Link to="/about" className="hover:text-velmora-charcoal transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-velmora-charcoal transition-colors">Sustainability</Link></li>
              <li><Link to="/stockist" className="hover:text-velmora-charcoal transition-colors">Stockists</Link></li>
              <li><Link to="/privacy" className="hover:text-velmora-charcoal transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="hairline mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-[0.2em] text-velmora-charcoal/40">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
