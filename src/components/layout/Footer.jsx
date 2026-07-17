import { Link } from 'react-router-dom';
import { Instagram, Pinterest, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso-800 text-warm-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-widest text-cream">
              VELMORA
            </Link>
            <p className="text-sm text-espresso-300 mt-4 leading-relaxed max-w-xs">
              Demi-fine jewelry crafted to be treasured. Gold-plated pieces made with intention for the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-espresso-300 hover:text-cream transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Pinterest" className="text-espresso-300 hover:text-cream transition-colors">
                <Pinterest className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Email" className="text-espresso-300 hover:text-cream transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest uppercase text-espresso-400 mb-4 font-sans font-medium">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="text-sm text-espresso-300 hover:text-cream transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-espresso-300 hover:text-cream transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-espresso-300 hover:text-cream transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-espresso-300 hover:text-cream transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-espresso-300 hover:text-cream transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest uppercase text-espresso-400 mb-4 font-sans font-medium">Help</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">FAQs</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest uppercase text-espresso-400 mb-4 font-sans font-medium">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-espresso-300 hover:text-cream transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Payment */}
          <div className="md:col-span-2">
            <h4 className="text-xs tracking-widest uppercase text-espresso-400 mb-4 font-sans font-medium">Payment</h4>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-espresso-400 bg-espresso-700 px-2 py-1 rounded">VISA</span>
              <span className="text-xs text-espresso-400 bg-espresso-700 px-2 py-1 rounded">MC</span>
              <span className="text-xs text-espresso-400 bg-espresso-700 px-2 py-1 rounded">AMEX</span>
              <span className="text-xs text-espresso-400 bg-espresso-700 px-2 py-1 rounded">PAYPAL</span>
              <span className="text-xs text-espresso-400 bg-espresso-700 px-2 py-1 rounded">APPLE PAY</span>
            </div>
          </div>
        </div>

        <div className="hairline border-espresso-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-espresso-400">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-espresso-400 hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-espresso-400 hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
