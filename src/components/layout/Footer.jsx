import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1714] text-[#faf8f5]">
      <div className="container-padding">
        <div className="py-16 md:py-20">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="serif-heading text-2xl tracking-wider block mb-4">
                VELMORA
              </Link>
              <p className="text-sm text-[#8a8178] leading-relaxed">
                Demi-fine gold jewelry, crafted to be treasured.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 text-[#c9a96e]">Shop</h4>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">All Jewelry</Link></li>
                <li><Link to="/shop?category=earrings" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Earrings</Link></li>
                <li><Link to="/shop?category=necklaces" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Necklaces</Link></li>
                <li><Link to="/shop?category=huggies" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Huggies</Link></li>
                <li><Link to="/shop?category=sets" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Gift Sets</Link></li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 text-[#c9a96e]">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs uppercase tracking-widest mb-4 text-[#c9a96e]">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Our Story</Link></li>
                <li><Link to="/journal" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Journal</Link></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#faf8f5] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#2a2520] my-10" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Payment Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#8a8178]">We accept</span>
              <div className="flex items-center gap-2">
                {['Visa', 'MC', 'Amex', 'PayPal'].map((method) => (
                  <span key={method} className="px-2 py-1 bg-[#2a2520] text-[#8a8178] text-[10px] uppercase tracking-wider">
                    {method}
                  </span>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-[#8a8178]">
              &copy; {new Date().getFullYear()} Velmora. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
