import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FAF9F6] pt-20 pb-10 border-t border-neutral-200">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif tracking-widest mb-6 block uppercase">VELMORA</Link>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6">
              Quiet luxury demi-fine jewelry designed for the modern woman. 
              Crafted in 18K gold and curated for longevity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-600 hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-600 hover:text-black transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-neutral-600 hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/shop" className="text-sm text-neutral-600 hover:text-black transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="text-sm text-neutral-600 hover:text-black transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="text-sm text-neutral-600 hover:text-black transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="text-sm text-neutral-600 hover:text-black transition-colors">Huggies</Link></li>
              <li><Link to="/collections" className="text-sm text-neutral-600 hover:text-black transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-sm text-neutral-600 hover:text-black transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-neutral-600 hover:text-black transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-black transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest mb-6 font-semibold">Newsletter</h4>
            <p className="text-sm text-neutral-600 mb-6">Join our mailing list and get 10% off your first order.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-neutral-400 py-2 text-sm focus:outline-none focus:border-black uppercase tracking-widest"
              />
              <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 uppercase text-[10px] tracking-widest font-bold">Join</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-neutral-200 gap-6">
          <p className="text-[10px] text-neutral-400 tracking-widest">© VELMORA FINE JEWELRY 2026. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-4 grayscale opacity-50">
            {/* Simple payment placeholders */}
            <span className="text-[10px] tracking-widest">VISA</span>
            <span className="text-[10px] tracking-widest">MASTERCARD</span>
            <span className="text-[10px] tracking-widest">AMEX</span>
            <span className="text-[10px] tracking-widest">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
