import { Link } from 'react-router-dom';
import { Waves, Mail, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-teal-ocean rounded-xl flex items-center justify-center">
                <Waves className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight">
                Slug<span className="text-teal-ocean-light">Sea</span>
              </span>
            </div>
            <p className="text-muted-text text-sm leading-relaxed max-w-xs">
              The world's premier destination for rare and exotic sea slugs. Ethically sourced, expertly cared for, delivered to your door.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-text hover:text-teal-ocean-light transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-muted-text hover:text-teal-ocean-light transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-muted-text hover:text-teal-ocean-light transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-text">
              <li><Link to="/shop" className="hover:text-teal-ocean-light transition-colors">All Products</Link></li>
              <li><Link to="/shop?category=nudibranch" className="hover:text-teal-ocean-light transition-colors">Nudibranchs</Link></li>
              <li><Link to="/shop?category=sea-hare" className="hover:text-teal-ocean-light transition-colors">Sea Hares</Link></li>
              <li><Link to="/shop?category=care-kit" className="hover:text-teal-ocean-light transition-colors">Care Kits</Link></li>
              <li><Link to="/shop?category=food" className="hover:text-teal-ocean-light transition-colors">Food & Supplies</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Info</h4>
            <ul className="space-y-2 text-sm text-muted-text">
              <li><Link to="/about" className="hover:text-teal-ocean-light transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-teal-ocean-light transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-teal-ocean-light transition-colors">Care Guides</a></li>
              <li><a href="#" className="hover:text-teal-ocean-light transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-teal-ocean-light transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-text">
          <p>© 2026 SlugSea. All rights reserved.</p>
          <p>Live animals shipped with care. 48-hour live arrival guarantee.</p>
        </div>
      </div>
    </footer>
  );
}
