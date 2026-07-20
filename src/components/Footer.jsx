import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FDFCFB] border-t border-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-medium">
            VELMORA
          </Link>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Crafting demi-fine jewelry for the modern woman. Timeless pieces designed to be treasured forever.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="text-gray-400 hover:text-black cursor-pointer" />
            <Facebook size={20} className="text-gray-400 hover:text-black cursor-pointer" />
            <Twitter size={20} className="text-gray-400 hover:text-black cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Shop</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/shop" className="hover:text-black">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-black">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-black">Necklaces</Link></li>
            <li><Link to="/shop?category=new" className="hover:text-black">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Help</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/shipping" className="hover:text-black">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-black">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-black">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h4>
          <p className="text-sm text-gray-500 mb-4">Join our community for exclusive updates and early access.</p>
          <div className="flex border-b border-black pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-sm w-full outline-none placeholder:text-gray-300"
            />
            <button className="text-xs uppercase tracking-widest font-medium">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:row items-center justify-between text-[10px] uppercase tracking-widest text-gray-400 gap-4">
        <p>&copy; 2024 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
EOF > /workspace/my-app/src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FDFCFB] border-t border-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-serif tracking-widest font-medium">
            VELMORA
          </Link>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
            Crafting demi-fine jewelry for the modern woman. Timeless pieces designed to be treasured forever.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="text-gray-400 hover:text-black cursor-pointer" />
            <Facebook size={20} className="text-gray-400 hover:text-black cursor-pointer" />
            <Twitter size={20} className="text-gray-400 hover:text-black cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Shop</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/shop" className="hover:text-black">All Jewelry</Link></li>
            <li><Link to="/shop?category=earrings" className="hover:text-black">Earrings</Link></li>
            <li><Link to="/shop?category=necklaces" className="hover:text-black">Necklaces</Link></li>
            <li><Link to="/shop?category=new" className="hover:text-black">New Arrivals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Help</h4>
          <ul className="space-y-3 text-sm text-gray-500">
            <li><Link to="/shipping" className="hover:text-black">Shipping & Returns</Link></li>
            <li><Link to="/care" className="hover:text-black">Jewelry Care</Link></li>
            <li><Link to="/contact" className="hover:text-black">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-black">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-medium mb-6">Connect</h4>
          <p className="text-sm text-gray-500 mb-4">Join our community for exclusive updates and early access.</p>
          <div className="flex border-b border-black pb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent text-sm w-full outline-none placeholder:text-gray-300"
            />
            <button className="text-xs uppercase tracking-widest font-medium">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:row items-center justify-between text-[10px] uppercase tracking-widest text-gray-400 gap-4">
        <p>&copy; 2024 VELMORA FINE JEWELRY. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-6">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
