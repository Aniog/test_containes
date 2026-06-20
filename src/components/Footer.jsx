import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1816] text-[#F8F5F1] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-12 border-b border-white/20">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry, crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-[#B89778] transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-[#B89778] transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-[#B89778] transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-[#B89778] transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=Sets" className="hover:text-[#B89778] transition-colors">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/product/1#shipping" className="hover:text-[#B89778] transition-colors">Shipping</Link></li>
              <li><Link to="/product/1#returns" className="hover:text-[#B89778] transition-colors">Returns</Link></li>
              <li><Link to="/product/1#care" className="hover:text-[#B89778] transition-colors">Jewelry Care</Link></li>
              <li><Link to="/product/1#contact" className="hover:text-[#B89778] transition-colors">Contact Us</Link></li>
              <li><Link to="/product/1#size" className="hover:text-[#B89778] transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.12em] uppercase mb-4 text-white/60">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-[#B89778] transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-[#B89778] transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-[#B89778] transition-colors">Sustainability</a></li>
              <li><a href="#press" className="hover:text-[#B89778] transition-colors">Press</a></li>
              <li><a href="#careers" className="hover:text-[#B89778] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {currentYear} Velmora Fine Jewelry</span>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 tracking-[0.1em] text-[10px]">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
