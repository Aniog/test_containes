import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const shopLinks = [
    { label: "All Jewelry", to: "/shop" },
    { label: "Earrings", to: "/shop?category=earrings" },
    { label: "Necklaces", to: "/shop?category=necklaces" },
    { label: "Huggies", to: "/shop?category=huggies" },
  ];

  const helpLinks = [
    { label: "Shipping & Returns", to: "#" },
    { label: "Care Guide", to: "#" },
    { label: "FAQ", to: "#" },
    { label: "Contact Us", to: "#" },
  ];

  const companyLinks = [
    { label: "Our Story", to: "#" },
    { label: "Journal", to: "#" },
    { label: "Sustainability", to: "#" },
    { label: "Stockists", to: "#" },
  ];

  return (
    <footer className="bg-velmora-base text-velmora-cream">
      <div className="px-4 sm:px-6 lg:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="font-serif text-2xl tracking-wide inline-block mb-4">
              VELMORA
            </Link>
            <p className="text-velmora-stone text-sm leading-relaxed max-w-sm">
              Demi-fine jewelry crafted for everyday luxury and meaningful gifting.
              Designed in small batches, made to be treasured.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="hover:text-velmora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-velmora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-velmora-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              {shopLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-4">
              Help
            </h4>
            <ul className="space-y-3 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-velmora-stone mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="hover:text-velmora-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-velmora-stone">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs text-velmora-stone uppercase tracking-wider">
              We accept
            </span>
            <div className="flex items-center gap-2">
              {["Visa", "MC", "Amex", "PayPal"].map((name) => (
                <span
                  key={name}
                  className="bg-white/10 text-[10px] px-2 py-1 rounded"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
