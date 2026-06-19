import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "./Logo";
import { useUI } from "@/context/CartContext";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/shop?category=earrings",  label: "Earrings"  },
      { to: "/shop?category=necklaces", label: "Necklaces" },
      { to: "/shop?category=huggies",   label: "Huggies"   },
      { to: "/shop?category=gifts",     label: "Gift Sets" },
      { to: "/shop",                    label: "New Arrivals" },
    ],
  },
  {
    title: "Help",
    links: [
      { to: "/help/shipping",  label: "Shipping & Returns" },
      { to: "/help/care",      label: "Jewelry Care"        },
      { to: "/help/size",      label: "Size Guide"          },
      { to: "/help/contact",   label: "Contact Us"          },
      { to: "/help/faq",       label: "FAQ"                 },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about",    label: "Our Story"  },
      { to: "/journal",  label: "The Journal"},
      { to: "/sustainability", label: "Sustainability" },
      { to: "/press",    label: "Press"      },
      { to: "/careers",  label: "Careers"    },
    ],
  },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Klarna"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const { showToast } = useUI();

  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Welcome — your 10% off code is on its way.");
    setEmail("");
  };

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-page px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <Logo tone="cream" size="lg" />
            <p className="mt-6 max-w-sm text-cream/70 text-sm leading-relaxed">
              Demi-fine jewelry in 18K gold and sterling silver — designed in Paris, hand-finished in small batches, made to be worn for a lifetime.
            </p>
            <form onSubmit={submit} className="mt-8 max-w-md">
              <p className="vm-eyebrow text-cream/80 mb-3">Join the Atelier</p>
              <div className="flex items-center border-b border-cream/30 focus-within:border-gold-soft transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 bg-transparent outline-none py-3 text-cream placeholder:text-cream/50 text-sm"
                />
                <button type="submit" className="vm-eyebrow text-cream hover:text-gold-soft py-3 pl-4">
                  Subscribe
                </button>
              </div>
              <p className="text-[11px] text-cream/50 mt-3">
                10% off your first order. By subscribing you agree to our privacy policy.
              </p>
            </form>
          </div>

          {/* Link columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="vm-eyebrow text-cream/80 mb-5">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to + l.label}>
                      <Link to={l.to} className="text-sm text-cream/75 hover:text-gold-soft transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {PAYMENTS.map((p) => (
              <span key={p} className="px-2.5 py-1 border border-cream/20 text-[10px] tracking-[0.2em] uppercase text-cream/70 rounded-sm">
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <SocialLink href="https://instagram.com" label="Instagram"><Instagram className="w-4 h-4" strokeWidth={1.4} /></SocialLink>
            <SocialLink href="https://twitter.com"   label="Twitter">  <Twitter   className="w-4 h-4" strokeWidth={1.4} /></SocialLink>
            <SocialLink href="https://youtube.com"   label="YouTube">  <Youtube   className="w-4 h-4" strokeWidth={1.4} /></SocialLink>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[11px] text-cream/55">
          <p>© {new Date().getFullYear()} Velmora Fine Jewelry. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link to="/legal/privacy" className="hover:text-gold-soft">Privacy</Link></li>
            <li><Link to="/legal/terms"   className="hover:text-gold-soft">Terms</Link></li>
            <li><Link to="/legal/cookies" className="hover:text-gold-soft">Cookies</Link></li>
            <li><Link to="/legal/accessibility" className="hover:text-gold-soft">Accessibility</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="w-9 h-9 grid place-items-center border border-cream/20 hover:border-gold-soft hover:text-gold-soft transition-colors text-cream"
    >
      {children}
    </a>
  );
}
