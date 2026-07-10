import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

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
    { label: "Journal", href: "/#journal" },
    { label: "Sustainability", href: "/#" },
    { label: "Press", href: "/#" },
    { label: "Careers", href: "/#" },
  ],
};

const Footer = () => (
  <footer className="bg-espresso text-cream">
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
      {/* Top row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-cream/10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="font-cormorant text-2xl tracking-widest2 font-medium text-cream">
            VELMORA
          </Link>
          <p className="font-inter text-xs text-cream/50 mt-3 leading-relaxed max-w-[200px]">
            Demi-fine gold jewelry crafted for the woman who moves through the world with intention.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a href="#" aria-label="Twitter" className="text-cream/50 hover:text-gold transition-colors">
              <Twitter size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="font-inter text-xs tracking-widest uppercase text-cream/40 mb-4">
              {heading}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-inter text-xs text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6">
        <p className="font-inter text-xs text-cream/30">
          © 2024 Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {/* Payment icons as text badges */}
          {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
            <span
              key={p}
              className="font-inter text-[9px] tracking-wide text-cream/40 border border-cream/10 px-1.5 py-0.5"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
