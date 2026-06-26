import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import BrandWordmark from "./BrandWordmark";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Products", href: "#products" },
  { label: "Technology", href: "#technology" },
  { label: "Applications", href: "#applications" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        scrolled
          ? "bg-paper/95 backdrop-blur-sm border-b border-mist"
          : "bg-paper/0 border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10 py-5">
        <BrandWordmark />

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-ink/80 hover:text-brass-deep transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-brass-deep hover:text-ink transition-colors"
          >
            Request Quote
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center border border-ink/20 text-ink hover:border-brass hover:text-brass-deep transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-mist bg-paper">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-mist/60 py-4 text-sm font-medium tracking-wide text-ink hover:text-brass-deep"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center bg-ink text-paper px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-brass-deep hover:text-ink transition-colors"
            >
              Request Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
