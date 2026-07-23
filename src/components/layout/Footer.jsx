import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2420] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider font-light">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-[#9B9590] leading-relaxed">
              Demi-fine gold jewelry, crafted to be treasured.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-[#9B9590] hover:text-[#B8956A] transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[#9B9590] hover:text-[#B8956A] transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[#9B9590] hover:text-[#B8956A] transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[#9B9590] hover:text-[#B8956A] transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4 font-medium">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4 font-medium">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-wider uppercase mb-4 font-medium">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-[#9B9590] hover:text-[#FAF8F5] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & bottom */}
        <div className="mt-12 pt-8 border-t border-[#3D3430] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#9B9590]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#9B9590]">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="bg-[#3D3430] text-[#9B9590] text-[10px] px-2 py-1 rounded">
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
