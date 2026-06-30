import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Hairline from "@/components/common/Hairline.jsx";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop", label: "All jewelry" },
      { to: "/shop?cat=earrings", label: "Earrings" },
      { to: "/shop?cat=necklaces", label: "Necklaces" },
      { to: "/shop?cat=huggies", label: "Huggies" },
      { to: "/shop?cat=sets", label: "Sets" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping", label: "Shipping" },
      { to: "/help/returns", label: "Returns" },
      { to: "/help/care", label: "Jewelry care" },
      { to: "/help/size", label: "Size guide" },
      { to: "/contact", label: "Contact us" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "Our story" },
      { to: "/journal", label: "Journal" },
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press", label: "Press" },
      { to: "/careers", label: "Careers" },
    ],
  },
];

function PaymentIcon({ label }) {
  return (
    <span
      className="inline-flex items-center justify-center h-7 min-w-[44px] px-2 border border-line text-[10px] tracking-[0.18em] uppercase text-ink-muted"
      aria-label={label}
    >
      {label}
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      toast.error("Please enter a valid email address.");
      return;
    }
    setStatus("success");
    setEmail("");
    toast.success("Thank you. Your 10% off code is on its way.");
  };

  return (
    <footer className="bg-surface-warm text-ink mt-24">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link
              to="/"
              className="font-serif text-3xl tracking-[0.32em] font-light text-ink"
            >
              VELMORA
            </Link>
            <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-sm">
              Demi-fine jewelry designed in warm 18K gold plating — made to be
              worn, layered, and treasured.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="p-2 text-ink-muted hover:text-gold transition-colors"
              >
                <Instagram strokeWidth={1.5} className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="p-2 text-ink-muted hover:text-gold transition-colors"
              >
                <Facebook strokeWidth={1.5} className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="p-2 text-ink-muted hover:text-gold transition-colors"
              >
                <Youtube strokeWidth={1.5} className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@velmora.com"
                aria-label="Email"
                className="p-2 text-ink-muted hover:text-gold transition-colors"
              >
                <Mail strokeWidth={1.5} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="eyebrow mb-4 text-ink">{col.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="font-sans text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="eyebrow mb-4 text-ink">Stay close</h4>
            <form onSubmit={onSubscribe} className="flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="Your email"
                className="input-line text-sm"
                aria-invalid={status === "error"}
              />
              <button
                type="submit"
                className="btn-secondary self-start"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14">
          <Hairline />
        </div>

        <div className="mt-6 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="font-sans text-xs text-ink-muted tracking-wide">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple Pay" />
            <PaymentIcon label="Shop Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
}
