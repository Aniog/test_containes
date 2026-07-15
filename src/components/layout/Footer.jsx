import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-padding">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="serif-heading text-2xl font-light tracking-wider text-background">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Demi-fine gold jewelry crafted to be treasured. Premium quality, accessible luxury.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-background/60 hover:text-background transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-background/60 hover:text-background transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-background/60 hover:text-background transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-background/60 hover:text-background transition-colors">Huggies</Link></li>
              <li><Link to="/shop?category=sets" className="text-sm text-background/60 hover:text-background transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Help</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Care Instructions</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm tracking-widest uppercase mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">Our Story</Link></li>
              <li><Link to="/journal" className="text-sm text-background/60 hover:text-background transition-colors">Journal</Link></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Sustainability</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-background/60 hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-background/60" />
              <span className="text-sm">Join our newsletter for exclusive offers</span>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 px-4 py-2 bg-transparent border border-background/20 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/40"
              />
              <button className="px-6 py-2 bg-background text-foreground text-sm tracking-widest uppercase hover:bg-background/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-background/40">We accept</span>
            <div className="flex gap-2">
              {['Visa', 'MC', 'Amex', 'PayPal'].map(method => (
                <span key={method} className="px-2 py-1 border border-background/20 text-[10px] text-background/60 rounded">
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
