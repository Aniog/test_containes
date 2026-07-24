import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1714] text-[#d4cfc8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider text-[#e8e2d9] block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[#a8a29e] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-[#e8e2d9] mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-[#e8e2d9] mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase text-[#e8e2d9] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#a8a29e] hover:text-[#e8e2d9] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#2a2520] flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex items-center gap-5">
            <a href="#" className="text-[#a8a29e] hover:text-[#e8e2d9] transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[#a8a29e] hover:text-[#e8e2d9] transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-[#a8a29e] hover:text-[#e8e2d9] transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-[#a8a29e] hover:text-[#e8e2d9] transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3 text-[#a8a29e] text-xs">
            <span className="px-2 py-1 border border-[#2a2520] rounded">VISA</span>
            <span className="px-2 py-1 border border-[#2a2520] rounded">MC</span>
            <span className="px-2 py-1 border border-[#2a2520] rounded">AMEX</span>
            <span className="px-2 py-1 border border-[#2a2520] rounded">PayPal</span>
            <span className="px-2 py-1 border border-[#2a2520] rounded">Apple Pay</span>
          </div>

          <p className="text-xs text-[#6b6560]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
