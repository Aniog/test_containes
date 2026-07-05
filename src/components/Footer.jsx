import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = {
  Shop: ["Earrings", "Necklaces", "Huggies", "Gift Sets", "New Arrivals"],
  Help: ["Shipping & Returns", "Care Guide", "Size Guide", "FAQ", "Contact"],
  Company: ["Our Story", "Sustainability", "Press", "Careers", "Stockists"],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream mt-auto">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-serif text-3xl tracking-widest uppercase block mb-5"
            >
              Velmora
            </Link>
            <p className="text-warmgray max-w-sm text-sm leading-relaxed">
              Demi-fine jewelry designed for everyday elegance. Crafted in 18k
              gold plating, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 border border-warmgray/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-warmgray/30 flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-widest text-warmgray mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/shop"
                      className="text-sm hover:text-accent transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline border-stonehair/20 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-warmgray">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-warmgray">
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
