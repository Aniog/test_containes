import { Link } from "react-router-dom";
import { Instagram, Facebook, Globe } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { label: "All Jewelry", href: "/shop" },
    { label: "Earrings", href: "/shop?category=earrings" },
    { label: "Necklaces", href: "/shop?category=necklaces" },
    { label: "Huggies", href: "/shop?category=huggies" },
    { label: "Gift Sets", href: "/shop?category=sets" },
  ];

  const helpLinks = [
    { label: "Shipping & Returns", href: "#" },
    { label: "Size Guide", href: "#" },
    { label: "Care Instructions", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const companyLinks = [
    { label: "Our Story", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Press", href: "#" },
    { label: "Affiliates", href: "#" },
    { label: "Journal", href: "#" },
  ];

  return (
    <footer className="bg-velmora-charcoal text-velmora-text-light">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="font-cormorant text-2xl font-medium tracking-widest-lg text-velmora-text-light">
              VELMORA
            </Link>
            <p className="font-manrope text-sm text-velmora-text-light/60 leading-relaxed max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to be worn every day, treasured forever.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-velmora-text-light/50 hover:text-velmora-gold transition-colors duration-200">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-velmora-text-light/50 hover:text-velmora-gold transition-colors duration-200">
                <Globe size={18} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-velmora-text-light/50 hover:text-velmora-gold transition-colors duration-200">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold">
              Shop
            </h4>
            <ul className="space-y-3">
              {shopLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="font-manrope text-sm text-velmora-text-light/60 hover:text-velmora-text-light transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold">
              Help
            </h4>
            <ul className="space-y-3">
              {helpLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-manrope text-sm text-velmora-text-light/60 hover:text-velmora-text-light transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-manrope text-xs tracking-widest-md uppercase text-velmora-gold">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-manrope text-sm text-velmora-text-light/60 hover:text-velmora-text-light transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-manrope text-xs text-velmora-text-light/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {/* Payment icons as text badges */}
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="font-manrope text-[10px] text-velmora-text-light/40 border border-white/10 px-2 py-1 tracking-wide"
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
