import { Link } from "react-router-dom";
import { Instagram, Facebook, Pin } from "lucide-react";

export default function Footer() {
  const shopLinks = [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
  ];

  const helpLinks = [
    { label: "Shipping & Returns", to: "/" },
    { label: "Size Guide", to: "/" },
    { label: "Care Instructions", to: "/" },
    { label: "FAQ", to: "/" },
    { label: "Contact Us", to: "/" },
  ];

  const companyLinks = [
    { label: "Our Story", to: "/about" },
    { label: "Sustainability", to: "/" },
    { label: "Press", to: "/" },
    { label: "Careers", to: "/" },
    { label: "Journal", to: "/" },
  ];

  return (
    <footer className="bg-espresso text-ivory">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-cormorant text-2xl font-light tracking-widest uppercase text-ivory"
            >
              Velmora
            </Link>
            <p className="font-inter text-xs text-ivory/60 leading-relaxed mt-4 max-w-xs">
              Demi-fine gold jewelry crafted for the modern woman. Designed to
              be worn, treasured, and passed on.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="text-ivory/60 hover:text-gold transition-colors"
              >
                <Pin size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-ivory/40 mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-ivory/40 mb-5">
              Help
            </h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-widest text-ivory/40 mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-inter text-xs text-ivory/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-inter text-xs text-ivory/40">
            © 2026 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {["Visa", "MC", "Amex", "PayPal", "Apple Pay"].map((p) => (
              <span
                key={p}
                className="font-inter text-[10px] text-ivory/40 border border-ivory/20 px-2 py-0.5"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-inter text-xs text-ivory/40 hover:text-ivory/70 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-inter text-xs text-ivory/40 hover:text-ivory/70 transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
