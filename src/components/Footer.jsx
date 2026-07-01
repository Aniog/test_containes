import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-velmora-base text-velmora-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Logo */}
          <div>
            <Link to="/" className="heading-serif text-2xl tracking-[0.15em] text-velmora-cream">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-velmora-taupe leading-relaxed">
              Demi-fine jewelry crafted to be treasured.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=Earrings" className="hover:text-velmora-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=Necklaces" className="hover:text-velmora-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=Huggies" className="hover:text-velmora-gold transition-colors">Huggies</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold">Help</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#shipping" className="hover:text-velmora-gold transition-colors">Shipping</a></li>
              <li><a href="#returns" className="hover:text-velmora-gold transition-colors">Returns</a></li>
              <li><a href="#care" className="hover:text-velmora-gold transition-colors">Jewelry Care</a></li>
              <li><a href="#contact" className="hover:text-velmora-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase mb-4 text-velmora-gold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-velmora-gold transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="hover:text-velmora-gold transition-colors">Journal</Link></li>
              <li><a href="#sustainability" className="hover:text-velmora-gold transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-velmora-gold transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Social */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-velmora-taupe">
          <div className="flex items-center gap-4">
            <span>© {currentYear} Velmora Fine Jewelry</span>
          </div>

          {/* Payment Icons (text representation) */}
          <div className="flex items-center gap-3 text-xs tracking-widest">
            <span>VISA</span>
            <span>MC</span>
            <span>AMEX</span>
            <span>APPLE PAY</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-5 text-xs tracking-[0.1em]">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">INSTAGRAM</a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">PINTEREST</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-velmora-gold transition-colors">TIKTOK</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
