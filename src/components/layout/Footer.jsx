import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="velmora-heading text-2xl tracking-widest text-[#faf8f5]">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#8a8178] leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#8a8178] hover:text-[#c9a96e] transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#faf8f5] mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#faf8f5] mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-[#faf8f5] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-sm text-[#8a8178] hover:text-[#c9a96e] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="mt-12 pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8a8178]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8a8178]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="bg-[#333333] text-[#8a8178] text-[10px] px-2 py-1 rounded">
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
