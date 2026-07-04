import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import Container from "@/components/ui/Container.jsx";
import Hairline from "@/components/ui/Hairline.jsx";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
      { label: "Gift Sets", to: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping", to: "/help/shipping" },
      { label: "Returns", to: "/help/returns" },
      { label: "Care Guide", to: "/help/care" },
      { label: "Contact", to: "/help/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "/about#impact" },
      { label: "Press", to: "/about#press" },
    ],
  },
];

const PaymentIcon = ({ children }) => (
  <span className="inline-flex items-center justify-center h-7 w-11 border border-cream/25 rounded-sm text-[0.6rem] font-sans tracking-wider2 text-cream/80 bg-cream/5">
    {children}
  </span>
);

const Footer = () => (
  <footer className="bg-ink text-cream">
    <Container>
      <div className="py-16 sm:py-20">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-serif text-3xl tracking-widest2 text-cream">
              VELMORA
            </div>
            <p className="mt-5 font-sans text-[0.92rem] text-muteOnDark leading-relaxed max-w-sm">
              Demi-fine gold jewelry, hand-finished and made to be worn every day.
              Quiet luxury for the moments that matter.
            </p>
            <div className="mt-7 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 border border-cream/20 rounded-sm hover:border-champagne hover:text-champagne transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="p-2 border border-cream/20 rounded-sm hover:border-champagne hover:text-champagne transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow text-champagne mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="font-sans text-[0.92rem] text-muteOnDark hover:text-cream transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Hairline tone="cream" className="opacity-20" />
        </div>

        {/* Bottom: payments + copyright */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon>VISA</PaymentIcon>
            <PaymentIcon>MC</PaymentIcon>
            <PaymentIcon>AMEX</PaymentIcon>
            <PaymentIcon>PAYPAL</PaymentIcon>
            <PaymentIcon>APPLE</PaymentIcon>
            <PaymentIcon>SHOP</PaymentIcon>
          </div>
          <p className="font-sans text-[0.78rem] text-muteOnDark">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
