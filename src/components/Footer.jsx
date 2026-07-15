import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Shop: ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"],
  Help: ["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact"],
  Company: ["Our Story", "Sustainability", "Press", "Careers", "Wholesale"],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-3xl tracking-widest-xl font-semibold">
              VELMORA
            </Link>
            <p className="mt-4 text-cream/70 max-w-sm text-sm leading-relaxed">
              Demi-fine jewelry for everyday moments and lifetime treasures.
              Designed in small batches, made to last.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-cream/70 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-cream/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-sans text-xs font-semibold tracking-widest uppercase text-cream/50 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream/80 hover:text-gold transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-cream/50">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
