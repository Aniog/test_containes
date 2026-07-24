import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  Shop: ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"],
  Help: ["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact"],
  Company: ["Our Story", "Sustainability", "Journal", "Careers", "Press"],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.25em] uppercase"
            >
              Velmora
            </Link>
            <p className="mt-4 text-sm text-cream/70 max-w-xs leading-relaxed">
              Demi-fine jewelry designed for everyday luxury. Crafted to be
              treasured, worn, and remembered.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 border border-cream/30 rounded-full hover:bg-cream hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="p-2 border border-cream/30 rounded-full hover:bg-cream hover:text-charcoal transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="p-2 border border-cream/30 rounded-full hover:bg-cream hover:text-charcoal transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2">
              <h4 className="text-xs tracking-widest uppercase font-medium text-cream/50 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm text-cream/80 hover:text-cream transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-4">
            <h4 className="text-xs tracking-widest uppercase font-medium text-cream/50 mb-5">
              We Accept
            </h4>
            <div className="flex flex-wrap gap-3">
              {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((card) => (
                <span
                  key={card}
                  className="px-3 py-1.5 border border-cream/20 text-xs text-cream/70"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
