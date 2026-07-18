import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2825] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="serif-heading text-3xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Demi-fine jewelry crafted with care. Timeless pieces for everyday elegance.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-white/70 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-white/70 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-white/70 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-white/70 hover:text-white transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-white/70 hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-6 bg-white/20 rounded-sm" />
            <div className="w-10 h-6 bg-white/20 rounded-sm" />
            <div className="w-10 h-6 bg-white/20 rounded-sm" />
            <div className="w-10 h-6 bg-white/20 rounded-sm" />
          </div>
        </div>
      </div>
    </footer>
  );
}
