import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#FAF9F7]">
      <div className="container-velmora">
        {/* Main footer */}
        <div className="py-16 md:py-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-wider block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[#9B9590] leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#FAF9F7]">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#FAF9F7]">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#FAF9F7]">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#C9A96E] transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#333333]" />

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6B6560]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#6B6560]">We accept</span>
            <div className="flex items-center gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map((brand) => (
                <span key={brand} className="bg-[#333333] text-[#9B9590] text-[10px] px-2 py-1 rounded">
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#9B9590] hover:text-[#C9A96E] transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#9B9590] hover:text-[#C9A96E] transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#9B9590] hover:text-[#C9A96E] transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#9B9590] hover:text-[#C9A96E] transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
