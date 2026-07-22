import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import StrkImage from "@/components/ui/StrkImage";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Earrings", to: "/shop?cat=earrings" },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies", to: "/shop?cat=huggies" },
      { label: "Gift Sets", to: "/shop?cat=sets" },
      { label: "New Arrivals", to: "/shop?sort=new" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", to: "#" },
      { label: "Materials & Care", to: "#" },
      { label: "Size Guide", to: "#" },
      { label: "Contact Us", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Journal", to: "/journal" },
      { label: "Sustainability", to: "#" },
      { label: "Press", to: "#" },
      { label: "Careers", to: "#" },
    ],
  },
];

const PAYMENT_METHODS = ["VISA", "MC", "AMEX", "PayPal", "Apple Pay", "Shop Pay"];

export default function Footer() {
  return (
    <footer className="bg-espresso text-ivory">
      {/* Top — editorial brand block */}
      <div className="mx-auto grid max-w-container grid-cols-1 gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-20 lg:px-16">
        <div className="md:col-span-5">
          <Link
            to="/"
            className="font-serif text-2xl font-medium tracking-[0.32em] text-ivory"
          >
            VELMORA
          </Link>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-ivory/70">
            Demi-fine gold jewelry crafted in small batches, designed to be worn
            daily, and treasured for years.
          </p>
          <div className="mt-6 max-w-xs">
            <StrkImage
              query="warm lifestyle still life of gold jewelry on dark linen, candlelight, editorial"
              ratio="3x2"
              width={500}
              alt="Velmora jewelry on linen"
            />
          </div>
        </div>

        {COLUMNS.map((column) => (
          <div key={column.title} className="md:col-span-2">
            <h3 className="text-[11px] font-medium uppercase tracking-widest2 text-gold-soft">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[14px] text-ivory/80 transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <h3 className="text-[11px] font-medium uppercase tracking-widest2 text-gold-soft">
            Follow
          </h3>
          <ul className="mt-5 space-y-3">
            {[
              { label: "Instagram", Icon: Instagram },
              { label: "Facebook", Icon: Facebook },
              { label: "YouTube", Icon: Youtube },
              { label: "X", Icon: Twitter },
            ].map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[14px] text-ivory/80 transition-colors hover:text-gold-soft"
                >
                  <Icon size={14} strokeWidth={1.5} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="hairline-dark" />

      {/* Bottom */}
      <div className="mx-auto flex max-w-container flex-col gap-6 px-5 py-8 text-[11px] uppercase tracking-widest2 text-ivory/60 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li><a href="#" className="hover:text-gold-soft">Privacy</a></li>
          <li><a href="#" className="hover:text-gold-soft">Terms</a></li>
          <li><a href="#" className="hover:text-gold-soft">Accessibility</a></li>
          <li><a href="#" className="hover:text-gold-soft">Do Not Sell My Info</a></li>
        </ul>
        <ul className="flex flex-wrap items-center gap-2">
          {PAYMENT_METHODS.map((m) => (
            <li
              key={m}
              className="rounded-sm border border-ivory/15 bg-ivory/5 px-2 py-1 text-[10px] font-medium tracking-wide text-ivory/70"
            >
              {m}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
