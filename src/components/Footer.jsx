import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-velmora-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest uppercase font-semibold text-velmora-dark mb-6">
              Velmora
            </h2>
            <p className="text-sm text-velmora-muted mb-6 max-w-xs">
              Crafted to be treasured. Demi-fine jewelry designed for the modern romantic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-velmora-dark hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-velmora-dark hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-velmora-dark hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm mb-6">Shop</h3>
            <ul className="space-y-4">
              <li><Link to="/collections/new" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">New Arrivals</Link></li>
              <li><Link to="/collections/earrings" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/collections/necklaces" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/collections/huggies" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/collections/best-sellers" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm mb-6">Help</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif uppercase tracking-widest text-sm mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Sustainability</Link></li>
              <li><Link to="/terms" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-velmora-border flex flex-col md:flex-row justify-between items-center text-xs text-velmora-muted">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="sr-only">Accepted Payment Methods</span>
            {/* Payment icons placeholder */}
            <div className="flex gap-2 opacity-50">
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
              <div className="w-8 h-5 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
