import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-velmora-charcoal text-velmora-sand">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-ultra-wide text-velmora-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-muted leading-relaxed">
              Demi-fine jewelry crafted to be treasured. Designed in California, worn worldwide.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-velmora-muted hover:text-velmora-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-white mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop?category=earrings" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-white mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Jewelry Care</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-editorial uppercase text-velmora-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-velmora-muted hover:text-velmora-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-velmora-warm/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-muted">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-velmora-muted hover:text-velmora-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-velmora-muted hover:text-velmora-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
