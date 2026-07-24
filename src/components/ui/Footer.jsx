import { Link } from 'react-router-dom';
import { Camera, MessageCircle, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.25em] text-cream inline-block mb-4"
            >
              VELMORA
            </Link>
            <p className="text-sm leading-relaxed text-cream/50 mt-3 max-w-[220px]">
              Demi-fine jewelry crafted for the modern woman. Gold that lives with you, every day.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cream mb-5">Shop</h4>
            <ul className="space-y-3">
              <FooterLink to="/shop?category=earrings">Earrings</FooterLink>
              <FooterLink to="/shop?category=necklaces">Necklaces</FooterLink>
              <FooterLink to="/shop?category=huggies">Huggies</FooterLink>
              <FooterLink to="/shop">All Jewelry</FooterLink>
              <FooterLink to="/shop">Gift Sets</FooterLink>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cream mb-5">Help</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Shipping & Returns</FooterLink>
              <FooterLink to="/">Size Guide</FooterLink>
              <FooterLink to="/">Jewelry Care</FooterLink>
              <FooterLink to="/">FAQ</FooterLink>
              <FooterLink to="/">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-cream mb-5">Company</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Our Story</FooterLink>
              <FooterLink to="/">Sustainability</FooterLink>
              <FooterLink to="/">Journal</FooterLink>
              <FooterLink to="/">Affiliates</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-xs text-cream/40">Visa</span>
            <span className="text-xs text-cream/40">Mastercard</span>
            <span className="text-xs text-cream/40">Amex</span>
            <span className="text-xs text-cream/40">PayPal</span>
            <span className="text-xs text-cream/40">Apple Pay</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors" aria-label="Instagram">
              <Camera size={16} />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors" aria-label="Facebook">
              <MessageCircle size={16} />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors" aria-label="Pinterest">
              <Heart size={16} />
            </a>
          </div>
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-cream/50 hover:text-cream transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
}