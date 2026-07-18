import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
  ],
  Help: [
    { label: "Shipping & Returns", to: "/shipping" },
    { label: "Size Guide", to: "/size-guide" },
    { label: "Care Instructions", to: "/care" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact Us", to: "/contact" },
  ],
  Company: [
    { label: "Our Story", to: "/about" },
    { label: "Journal", to: "/journal" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Press", to: "/press" },
    { label: "Careers", to: "/careers" },
  ],
};

const paymentIcons = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE"];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-widest2 text-cream block mb-4">
              VELMORA
            </Link>
            <p className="font-sans text-sm text-cream/60 leading-relaxed max-w-xs mb-6">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be treasured, worn every day.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors duration-200">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors duration-200">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="text-cream/50 hover:text-gold transition-colors duration-200">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-xs tracking-widest uppercase text-cream/40 mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-cream/70 hover:text-gold transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {paymentIcons.map((icon) => (
              <div
                key={icon}
                className="bg-cream/10 border border-cream/10 px-2 py-1 rounded-sm"
              >
                <span className="font-sans text-[9px] text-cream/50 tracking-wider">{icon}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
