import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-dark-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo & tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider text-dark-text block mb-4">
              VELMORA
            </Link>
            <p className="text-dark-text/60 text-sm leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-dark-text/80">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-dark-text/80">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4 text-dark-text/80">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Our Story</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Journal</a></li>
              <li><a href="#" className="text-dark-text/60 hover:text-dark-text text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-dark-text/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Payment icons */}
          <div className="flex items-center gap-4 text-dark-text/40">
            <CreditCard className="w-6 h-6" />
            <span className="text-xs text-dark-text/40">Visa · Mastercard · Amex · PayPal · Apple Pay</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-dark-text/60 hover:text-dark-text transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-dark-text/60 hover:text-dark-text transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-dark-text/60 hover:text-dark-text transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          <p className="text-dark-text/40 text-xs">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
