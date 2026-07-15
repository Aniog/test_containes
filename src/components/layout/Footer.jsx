import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Huggies", href: "/shop?category=huggies" },
    { label: "Gift Sets", href: "/shop?category=sets" },
  ],
  Help: [
    { label: "Shipping & Returns", href: "/#" },
    { label: "Size Guide", href: "/#" },
    { label: "Care Instructions", href: "/#" },
    { label: "FAQ", href: "/#" },
    { label: "Contact Us", href: "/#" },
  ],
  Company: [
    { label: "Our Story", href: "/#about" },
    { label: "Sustainability", href: "/#" },
    { label: "Press", href: "/#" },
    { label: "Affiliates", href: "/#" },
    { label: "Journal", href: "/#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl text-gold tracking-[0.2em] uppercase block mb-4">
              Velmora
            </Link>
            <p className="font-sans text-xs text-ivory/60 leading-relaxed mb-6 max-w-[200px]">
              Demi-fine gold jewelry crafted for the modern woman. Hypoallergenic, 18K gold plated.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-ivory/50 hover:text-gold transition-colors duration-200">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-ivory/50 hover:text-gold transition-colors duration-200">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-xs uppercase tracking-widest text-gold mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-xs text-ivory/60 hover:text-ivory transition-colors duration-200"
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
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-ivory/40">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="font-sans text-[9px] uppercase tracking-wide text-ivory/40 border border-ivory/20 px-1.5 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
