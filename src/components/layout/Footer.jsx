import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-cream pt-20 pb-10 border-t border-velmora-charcoal/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest block mb-6">VELMORA</Link>
            <p className="text-sm text-velmora-charcoal/70 leading-relaxed font-sans max-w-xs">
              Crafted with intention, designed for the modern woman. Everyday luxury that celebrates your unique journey.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="h-10 w-10 flex items-center justify-center border border-velmora-charcoal/10 hover:border-gold transition-colors text-velmora-charcoal">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center border border-velmora-charcoal/10 hover:border-gold transition-colors text-velmora-charcoal">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center border border-velmora-charcoal/10 hover:border-gold transition-colors text-velmora-charcoal">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans mb-8 font-semibold">Shop</h4>
            <ul className="space-y-4 text-sm text-velmora-charcoal/70 font-sans">
              <li><Link to="/shop" className="hover:text-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-gold transition-colors">Gifting & Sets</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans mb-8 font-semibold">Support</h4>
            <ul className="space-y-4 text-sm text-velmora-charcoal/70 font-sans">
              <li><Link to="#" className="hover:text-gold transition-colors">Track Order</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Shipping Info</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Care Guide</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide font-sans mb-8 font-semibold">Company</h4>
            <ul className="space-y-4 text-sm text-velmora-charcoal/70 font-sans">
              <li><Link to="#" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Stockists</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-velmora-charcoal/5 flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-widest text-velmora-charcoal/40 font-sans">
          <p>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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
