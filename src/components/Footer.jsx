import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-parchment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Demi-fine jewelry crafted for everyday elegance and moments worth treasuring.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/shop" className="hover:text-bronze transition-colors">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="hover:text-bronze transition-colors">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="hover:text-bronze transition-colors">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="hover:text-bronze transition-colors">Huggies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/" className="hover:text-bronze transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/" className="hover:text-bronze transition-colors">Care Guide</Link></li>
              <li><Link to="/" className="hover:text-bronze transition-colors">FAQ</Link></li>
              <li><Link to="/" className="hover:text-bronze transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest text-white/50 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link to="/" className="hover:text-bronze transition-colors">Our Story</Link></li>
              <li><Link to="/" className="hover:text-bronze transition-colors">Sustainability</Link></li>
              <li><Link to="/" className="hover:text-bronze transition-colors">Press</Link></li>
              <li><Link to="/" className="hover:text-bronze transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-white/60">
            <span className="text-xs uppercase tracking-widest">Visa</span>
            <span className="text-xs uppercase tracking-widest">Mastercard</span>
            <span className="text-xs uppercase tracking-widest">Amex</span>
            <span className="text-xs uppercase tracking-widest">PayPal</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Instagram" className="hover:text-bronze transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-bronze transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-bronze transition-colors">
              <Twitter size={18} />
            </a>
          </div>
          <p className="text-xs text-white/40">© 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
