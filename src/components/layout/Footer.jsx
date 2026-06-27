import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import Container from "./Container";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All Jewelry", href: "/shop" },
      { label: "Earrings", href: "/shop?category=earrings" },
      { label: "Necklaces", href: "/shop?category=necklaces" },
      { label: "Huggies", href: "/shop?category=huggies" },
      { label: "Gift Sets", href: "/shop" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Shipping & Returns", href: "#" },
      { label: "Care Guide", href: "#" },
      { label: "Size Guide", href: "#" },
      { label: "Contact", href: "mailto:care@velmora.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Collections", href: "/collections" },
      { label: "Journal", href: "/journal" },
      { label: "Sustainability", href: "#" },
    ],
  },
];

const paymentMethods = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  function onSubscribe(e) {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <footer className="bg-espresso text-bone">
      <Container size="wide">
        <div className="py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl tracking-[0.3em] uppercase">
              Velmora
            </Link>
            <p className="mt-6 text-sm leading-relaxed text-bone/70 max-w-sm font-light">
              Demi-fine jewelry designed in small batches. Quietly made, considered always.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-bone/80 hover:text-champagne transition-colors"
              >
                <Instagram strokeWidth={1.25} className="w-5 h-5" />
              </a>
              <a
                href="mailto:care@velmora.com"
                aria-label="Email"
                className="text-bone/80 hover:text-champagne transition-colors"
              >
                <Mail strokeWidth={1.25} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h3 className="text-label text-champagne">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") || link.href.startsWith("mailto:") || link.href === "#" ? (
                      <a
                        href={link.href}
                        className="text-sm text-bone/80 hover:text-bone transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-bone/80 hover:text-bone transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h3 className="text-label text-champagne">Newsletter</h3>
            <form onSubmit={onSubscribe} className="mt-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                aria-label="Email address"
                className="w-full bg-transparent border-b border-bone/30 py-2 text-sm text-bone placeholder:text-bone/50 focus:border-champagne focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="mt-4 text-label text-bone hover:text-champagne transition-colors"
              >
                Subscribe →
              </button>
              {status === "success" && (
                <p className="mt-3 text-xs text-champagne">Welcome to Velmora.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-xs text-rose">Please enter a valid email.</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-bone/15 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-xs text-bone/60">
            © {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {paymentMethods.map((m) => (
              <li
                key={m}
                className="text-[10px] uppercase tracking-label text-bone/60 border border-bone/15 px-2.5 py-1"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}