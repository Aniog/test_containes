import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const paymentIcons = [
  { name: "Visa", icon: "VISA" },
  { name: "Mastercard", icon: "MC" },
  { name: "Amex", icon: "AMEX" },
  { name: "PayPal", icon: "PayPal" },
  { name: "Apple Pay", icon: "Apple" },
];

export default function Footer() {
  return (
    <footer className="bg-text-primary text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-[0.25em] text-cream no-underline">
              VELMORA
            </Link>
            <p className="text-xs text-cream/60 mt-4 leading-relaxed max-w-[200px]">
              Demi-fine gold jewelry crafted to be treasured. Ethically made, thoughtfully designed.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/80 mb-4 font-sans font-medium">Shop</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">All Jewelry</Link></li>
              <li><Link to="/shop?category=earrings" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Earrings</Link></li>
              <li><Link to="/shop?category=necklaces" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Necklaces</Link></li>
              <li><Link to="/shop?category=huggies" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Huggies</Link></li>
              <li><Link to="/shop" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/80 mb-4 font-sans font-medium">Help</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Shipping Info</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Returns & Exchanges</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Care Guide</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">FAQ</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/80 mb-4 font-sans font-medium">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Our Story</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Sustainability</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Journal</Link></li>
              <li><Link to="/" className="text-sm text-cream/60 hover:text-cream transition-colors no-underline">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="hairline border-cream/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {paymentIcons.map((p) => (
              <span key={p.name} className="text-xs text-cream/40 font-mono tracking-wider">
                {p.icon}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="text-cream/40 hover:text-cream transition-colors" aria-label="Twitter/X">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-cream/30">&copy; 2026 Velmora Fine Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}