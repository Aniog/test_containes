import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

function PinterestIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.853 0 1.267.641 1.267 1.408 0 .858-.546 2.141-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.868 3.137-4.561 0-2.386-1.715-4.054-4.163-4.054-2.836 0-4.5 2.127-4.5 4.326 0 .856.33 1.775.741 2.276a.3.3 0 0 1 .069.286c-.076.313-.244.995-.277 1.134-.044.183-.146.222-.337.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

const footerLinks = {
  Shop: [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
    { label: "Gift Sets", to: "/shop?category=sets" },
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

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-2xl tracking-widest font-light text-cream block mb-4">
              VELMORA
            </Link>
            <p className="text-xs font-sans text-cream/50 leading-relaxed mb-6 max-w-xs">
              Demi-fine gold jewelry for the modern woman. Crafted to be treasured, priced to be worn every day.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-cream/50 hover:text-gold transition-colors">
                <Instagram size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="text-cream/50 hover:text-gold transition-colors">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Pinterest" className="text-cream/50 hover:text-gold transition-colors">
                <PinterestIcon size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-sans uppercase tracking-widest text-cream/40 mb-5">
                {heading}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-xs font-sans text-cream/70 hover:text-gold transition-colors"
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
          <p className="text-[10px] font-sans text-cream/30 uppercase tracking-widest">
            © 2024 Velmora Fine Jewelry. All rights reserved.
          </p>

          {/* Payment icons */}
          <div className="flex items-center gap-3">
            {["VISA", "MC", "AMEX", "PAYPAL", "APPLE PAY"].map((p) => (
              <span
                key={p}
                className="text-[9px] font-sans text-cream/30 border border-cream/10 px-1.5 py-0.5 tracking-wider"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-[10px] font-sans text-cream/30 hover:text-cream/60 transition-colors uppercase tracking-widest">
              Privacy
            </a>
            <a href="#" className="text-[10px] font-sans text-cream/30 hover:text-cream/60 transition-colors uppercase tracking-widest">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
