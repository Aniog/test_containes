import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/data/site";

const LogoMark = ({ className = "" }) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6 10 L16 5 L26 10 L26 22 L16 27 L6 22 Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M6 10 L16 15 L26 10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path
      d="M16 15 L16 27"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-brand-line"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 text-brand-ink"
          aria-label={BRAND.name}
        >
          <LogoMark className="text-brand-brass" />
          <div className="leading-none">
            <div className="font-display font-semibold tracking-wide text-[15px]">
              ARTITECT
            </div>
            <div className="text-[10px] tracking-eyebrow uppercase text-brand-muted mt-0.5">
              Machinery
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-ink/80 hover:text-brand-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink border border-brand-line hover:border-brand-ink rounded-full px-5 py-2.5 transition-colors"
          >
            Talk to engineering
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium bg-brand-ink text-white hover:bg-brand-steel rounded-full px-5 py-2.5 transition-colors"
          >
            Request a quote
          </a>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-line text-brand-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand-line">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-brand-ink py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-brand-ink text-white rounded-full px-5 py-3 text-sm font-medium"
            >
              Request a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
