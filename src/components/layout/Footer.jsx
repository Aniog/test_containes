import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, ArrowRight } from "lucide-react";
import { Logo } from "./Navbar";

const FOOTER_COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "Earrings",  to: "/shop?cat=earrings"  },
      { label: "Necklaces", to: "/shop?cat=necklaces" },
      { label: "Huggies",   to: "/shop?cat=huggies"   },
      { label: "Gift Sets", to: "/shop"                },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "Shipping & Returns", to: "/help/shipping" },
      { label: "Care Guide",         to: "/help/care"      },
      { label: "Size Guide",         to: "/help/size"      },
      { label: "Contact",            to: "/help/contact"   },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story",  to: "/about"    },
      { label: "Sustainability", to: "/about#materials" },
      { label: "Press",      to: "/about#press"      },
      { label: "Journal",    to: "/journal"  },
    ],
  },
];

function PaymentIcon({ label, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center justify-center min-w-[44px] h-7 px-2 rounded-[3px] border border-hairline bg-ivory-50 text-[10px] tracking-widest font-medium text-espresso-700 uppercase " +
        className
      }
      aria-label={label}
    >
      {label}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="surface-dark">
      <div className="container-x pt-20 pb-10">
        {/* Top — newsletter strip */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pb-16 border-b border-espresso-700/60">
          <div>
            <p className="eyebrow text-gold-200/80">Stay close</p>
            <h3 className="h-display mt-3 text-3xl md:text-4xl text-ivory-50 max-w-md">
              Quiet letters from the studio — new pieces, first access, no noise.
            </h3>
          </div>
          <form
            className="self-end"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const email = new FormData(form).get("email");
              if (!email) return;
              form.reset();
              form.dataset.submitted = "true";
              setTimeout(() => { delete form.dataset.submitted; }, 2500);
            }}
          >
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <div className="flex items-center border-b border-espresso-700/60 focus-within:border-gold-400 transition-colors">
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 bg-transparent py-4 text-ivory-50 placeholder:text-espresso-400 outline-none font-sans text-sm"
              />
              <button
                type="submit"
                className="text-ivory-50 hover:text-gold-400 transition-colors p-2"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} strokeWidth={1.3} />
              </button>
            </div>
            <p className="mt-3 text-[11px] tracking-widest uppercase text-espresso-400">
              By subscribing you agree to receive marketing emails.
            </p>
          </form>
        </div>

        {/* Middle — columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          <div className="col-span-2 md:col-span-1">
            <Logo light />
            <p className="mt-5 text-sm text-espresso-400 max-w-xs leading-relaxed">
              Demi-fine jewelry, hand-finished in small batches.
              Designed to live with you — every day, and forever.
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="eyebrow text-gold-200/80">{col.heading}</p>
              <ul className="mt-5 space-y-3 text-sm text-ivory-50/90">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="hover:text-gold-400 transition-colors duration-300"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom — payment + socials + legal */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-espresso-700/60">
          <div className="flex flex-wrap items-center gap-2">
            <PaymentIcon label="Visa" />
            <PaymentIcon label="MC" />
            <PaymentIcon label="Amex" />
            <PaymentIcon label="PayPal" />
            <PaymentIcon label="Apple Pay" />
            <PaymentIcon label="G Pay" />
          </div>
          <div className="flex items-center gap-4 text-ivory-50">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-gold-400 transition-colors"
            >
              <Instagram size={18} strokeWidth={1.4} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:text-gold-400 transition-colors"
            >
              <Facebook size={18} strokeWidth={1.4} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:text-gold-400 transition-colors"
            >
              <Youtube size={18} strokeWidth={1.4} />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-8 text-[11px] uppercase tracking-[0.22em] text-espresso-400">
          <p>© 2026 Velmora Fine Jewelry — All rights reserved</p>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="hover:text-gold-400 transition-colors">Privacy</Link>
            <Link to="/legal/terms"   className="hover:text-gold-400 transition-colors">Terms</Link>
            <Link to="/legal/cookies" className="hover:text-gold-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
