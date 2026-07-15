import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-6">VELMORA</h3>
            <p className="text-gray-400 mb-6">
              Timeless jewelry crafted with intention. Each piece tells a story.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop?category=Earrings" className="text-gray-400 hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-gray-400 hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-gray-400 hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white transition-colors">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider">Help</h4>
            <ul className="space-y-4">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/care" className="text-gray-400 hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-gray-400 hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-gray-400 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <CreditCard size={24} className="text-gray-400" />
            <span className="text-gray-400 text-sm">Secure Payment</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
