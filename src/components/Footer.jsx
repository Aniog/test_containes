import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl tracking-widest text-velmora-dark">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Demi-fine jewelry designed for everyday moments and lasting impressions. Crafted to be treasured.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-dark mb-4">
              Shop
            </h4>
            <ul className="space-y-2 text-sm text-velmora-muted">
              <li><Link to="/shop" className="hover:text-amber-700 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-amber-700 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-amber-700 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-amber-700 transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="hover:text-amber-700 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-dark mb-4">
              Help
            </h4>
            <ul className="space-y-2 text-sm text-velmora-muted">
              <li><Link to="/shipping" className="hover:text-amber-700 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="hover:text-amber-700 transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faq" className="hover:text-amber-700 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-amber-700 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium text-velmora-dark mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-velmora-muted">
              <li><Link to="/about" className="hover:text-amber-700 transition-colors">Our Story</Link></li>
              <li><Link to="/sustainability" className="hover:text-amber-700 transition-colors">Sustainability</Link></li>
              <li><Link to="/journal" className="hover:text-amber-700 transition-colors">Journal</Link></li>
              <li><Link to="/press" className="hover:text-amber-700 transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-velmora-muted uppercase tracking-wider">We accept</span>
              <div className="flex items-center gap-2 text-xs font-medium text-velmora-dark">
                <span className="border border-stone-300 px-2 py-1 rounded">VISA</span>
                <span className="border border-stone-300 px-2 py-1 rounded">MC</span>
                <span className="border border-stone-300 px-2 py-1 rounded">AMEX</span>
                <span className="border border-stone-300 px-2 py-1 rounded">PayPal</span>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-2">
              <a href="#" aria-label="Instagram" className="text-velmora-dark hover:text-amber-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-dark hover:text-amber-700 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
