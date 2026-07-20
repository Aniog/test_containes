import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1715] text-white pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl tracking-[0.2em] font-medium uppercase block mb-6">
              Velmora
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-xs leading-relaxed">
              Crafting fine jewelry designed to be treasured forever. Quiet luxury for your everyday.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg tracking-wider uppercase mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?collection=new" className="hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-wider uppercase mb-6">Help</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Jewelry Care</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg tracking-wider uppercase mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}