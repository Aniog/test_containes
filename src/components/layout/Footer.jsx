import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-velmora-black text-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-cream/60 leading-relaxed">
              Fine demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-velmora-cream/60 hover:text-velmora-gold transition-colors duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Gift Sets</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">All Jewelry</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Jewelry Care</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-velmora-gold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Journal</Link></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-sm text-velmora-cream/70 hover:text-velmora-cream transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-velmora-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-velmora-cream/40">
              &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-velmora-cream/40">We accept</span>
              <div className="flex gap-3 text-velmora-cream/40">
                <span className="text-xs font-medium">VISA</span>
                <span className="text-xs font-medium">MC</span>
                <span className="text-xs font-medium">AMEX</span>
                <span className="text-xs font-medium">PayPal</span>
                <span className="text-xs font-medium">Apple Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
