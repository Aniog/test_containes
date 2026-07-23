import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const FOOTER_LINKS = {
  Shop: [
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
    { label: "New Arrivals", to: "/shop" },
  ],
  Help: [
    { label: "Shipping & Returns", to: "/#" },
    { label: "Size Guide", to: "/#" },
    { label: "Care Instructions", to: "/#" },
    { label: "FAQ", to: "/#" },
    { label: "Contact Us", to: "/#" },
  ],
  Company: [
    { label: "Our Story", to: "/#about" },
    { label: "Journal", to: "/#journal" },
    { label: "Sustainability", to: "/#" },
    { label: "Press", to: "/#" },
    { label: "Affiliates", to: "/#" },
  ],
};

const PAYMENT_ICONS = ["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"];

export default function Footer() {
  return (
    <footer className="bg-velvet border-t border-bark/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-serif text-2xl font-light tracking-widest2 uppercase text-parchment block mb-4"
            >
              Velmora
            </Link>
            <p className="font-sans text-xs text-driftwood leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry crafted for the everyday. Wear it with intention.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="text-driftwood hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-driftwood hover:text-gold transition-colors duration-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.566 0-2.387-1.715-4.057-4.163-4.057-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-driftwood hover:text-gold transition-colors duration-300">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-sans text-xs tracking-widest uppercase text-champagne/80 mb-5">
                {heading}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="font-sans text-xs text-driftwood hover:text-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-bark/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] text-driftwood">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {PAYMENT_ICONS.map((icon) => (
              <span
                key={icon}
                className="font-sans text-[9px] tracking-wide text-driftwood border border-bark/40 px-1.5 py-0.5"
              >
                {icon}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="#" className="font-sans text-[10px] text-driftwood hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-[10px] text-driftwood hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
