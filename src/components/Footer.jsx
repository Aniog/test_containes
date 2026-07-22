import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & about */}
          <div className="md:col-span-1">
            <Link to="/" className="serif-heading text-2xl tracking-widest block mb-4">
              VELMORA
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Demi-fine gold jewelry designed for everyday luxury. Crafted with care, worn with confidence.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 text-white/80">Shop</h3>
            <ul className="space-y-2">
              {['Earrings', 'Necklaces', 'Huggies', 'Gift Sets', 'New Arrivals'].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 text-white/80">Help</h3>
            <ul className="space-y-2">
              {['Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Care Instructions', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs tracking-widest uppercase mb-4 text-white/80">Company</h3>
            <ul className="space-y-2">
              {['Our Story', 'Sustainability', 'Journal', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-sm text-white/60 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-3 text-white/40 text-xs">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>

          {/* Copyright */}
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
