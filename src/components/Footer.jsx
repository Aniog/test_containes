import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-2xl tracking-widest mb-6">VELMORA</h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Premium demi-fine jewelry designed for the modern woman. 
              Quiet luxury that transitions from day to night.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="text-zinc-400 hover:text-accent cursor-pointer transition-colors" />
              <Facebook size={20} className="text-zinc-400 hover:text-accent cursor-pointer transition-colors" />
              <Twitter size={20} className="text-zinc-400 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="uppercase-widest text-xs font-semibold mb-6">Shop</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/shop" className="hover:text-zinc-900 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-zinc-900 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-zinc-900 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-zinc-900 transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="uppercase-widest text-xs font-semibold mb-6">Help</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Shipping & Returns</Link></li>
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Jewelry Care</Link></li>
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="uppercase-widest text-xs font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Journal</Link></li>
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Sustainability</Link></li>
              <li><Link to="#" className="hover:text-zinc-900 transition-colors">Stockists</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-100 space-y-4 md:space-y-0 text-[10px] uppercase-widest text-zinc-400">
          <div>© 2026 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</div>
          <div className="flex space-x-6">
            <Link to="#" className="hover:text-zinc-900">Privacy Policy</Link>
            <Link to="#" className="hover:text-zinc-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
