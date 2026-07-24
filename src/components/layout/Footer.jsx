import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2C2420] text-[#E8E2DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & About */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-wider text-white block mb-4">
              VELMORA
            </Link>
            <p className="text-sm text-[#A89F96] leading-relaxed">
              Demi-fine jewelry crafted to be treasured. 18K gold plated, hypoallergenic, designed for everyday luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-[#A89F96] hover:text-white transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-[#A89F96] hover:text-white transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-[#A89F96] hover:text-white transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-[#A89F96] hover:text-white transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-[#A89F96] hover:text-white transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">Care Guide</a></li>
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-[#A89F96] hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-[#A89F96] hover:text-white transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-[#A89F96] hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#3D322D] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A89F96]">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {['Visa', 'MC', 'Amex', 'PayPal'].map((brand) => (
              <span key={brand} className="text-xs bg-[#3D322D] px-2 py-1 rounded text-[#A89F96]">
                {brand}
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#A89F96] hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#A89F96] hover:text-white transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="text-[#A89F96] hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
