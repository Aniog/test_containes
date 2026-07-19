import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-parchment/80">
      <div className="max-w-site mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <Link to="/" className="font-serif text-3xl text-gold tracking-wide-heading">
              VELMORA
            </Link>
            <p className="mt-4 text-sm text-parchment/60 leading-relaxed max-w-xs">
              Crafted to be treasured. Premium demi-fine jewelry designed for
              the modern woman.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-parchment/50 hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="text-parchment/50 hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="text-parchment/50 hover:text-gold transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-serif text-lg text-parchment mb-4 tracking-wide-heading">Shop</h4>
            <ul className="space-y-2.5">
              {["Earrings", "Necklaces", "Huggies", "Gift Sets", "Bestsellers"].map((item) => (
                <li key={item}>
                  <Link to="/shop" className="text-sm text-parchment/60 hover:text-gold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-serif text-lg text-parchment mb-4 tracking-wide-heading">Help</h4>
            <ul className="space-y-2.5">
              {["Shipping Info", "Returns & Exchanges", "Size Guide", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-parchment/60 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg text-parchment mb-4 tracking-wide-heading">Company</h4>
            <ul className="space-y-2.5">
              {["Our Story", "Sustainability", "Journal", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-parchment/60 hover:text-gold transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-parchment/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-parchment/40">
            &copy; 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-parchment/40 mr-2">We accept</span>
            {["Visa", "Mastercard", "Amex", "PayPal"].map((card) => (
              <span
                key={card}
                className="text-[10px] bg-parchment/10 text-parchment/50 px-2 py-1 rounded-sm font-medium"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
