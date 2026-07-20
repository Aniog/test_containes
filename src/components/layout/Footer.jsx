import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { useEffect, useRef } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All Jewelry" },
      { to: "/shop?category=earrings", label: "Earrings" },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies", label: "Huggies" },
      { to: "/shop?sort=new", label: "New Arrivals" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "30-Day Returns" },
      { to: "/help/care", label: "Jewelry Care" },
      { to: "/help/size", label: "Size Guide" },
      { to: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our Story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

const PaymentIcon = ({ children }) => (
  <div className="h-7 w-11 rounded border border-hairline flex items-center justify-center text-[10px] tracking-wider2 text-muted font-medium">
    {children}
  </div>
);

export function Footer() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <footer ref={containerRef} className="bg-ink text-bone">
      {/* Top: logo + columns + newsletter */}
      <div className="px-6 md:px-10 lg:px-16 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
          <div className="md:col-span-4">
            <div className="font-serif text-3xl tracking-wider2 text-bone mb-4">VELMORA</div>
            <p className="text-bone/70 text-sm leading-relaxed max-w-xs">
              Crafted demi-fine jewelry in 18K gold plating. Designed to be worn, gifted, and treasured.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.25} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Facebook className="w-5 h-5" strokeWidth={1.25} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-bone/80 hover:text-gold-soft transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="text-[11px] uppercase tracking-wider2 text-bone/90 font-medium mb-5">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link
                      to={l.to}
                      className="text-sm text-bone/70 hover:text-gold-soft transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-wider2 text-bone/90 font-medium mb-5">
              Studio
            </h4>
            <address className="not-italic text-sm text-bone/70 leading-relaxed">
              Velmora Atelier
              <br />
              42 Rue des Fleurs
              <br />
              Paris, 75004
            </address>
          </div>
        </div>
      </div>

      {/* Hairline */}
      <div className="border-t border-bone/10" />

      {/* Bottom: copyright + payments */}
      <div className="px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-xs text-bone/50 tracking-wider2 uppercase">
          © 2026 Velmora Fine Jewelry. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <PaymentIcon>Visa</PaymentIcon>
          <PaymentIcon>MC</PaymentIcon>
          <PaymentIcon>Amex</PaymentIcon>
          <PaymentIcon>PayPal</PaymentIcon>
          <PaymentIcon>Apple</PaymentIcon>
        </div>
      </div>
    </footer>
  );
}
