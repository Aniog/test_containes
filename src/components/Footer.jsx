import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl text-stone-50 tracking-wider">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-stone-400 leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-amber-400 transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-stone-100 mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm hover:text-amber-400 transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm hover:text-amber-400 transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm hover:text-amber-400 transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm hover:text-amber-400 transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm hover:text-amber-400 transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-stone-100 mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-stone-100 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm hover:text-amber-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-stone-500">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 bg-stone-800 rounded text-[10px] text-stone-400"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
