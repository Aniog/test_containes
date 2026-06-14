import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { brand, navLinks } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-steel-deep/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3 group" aria-label="ARTITECT MACHINERY home">
          <span
            className="grid place-items-center w-10 h-10 border border-bronze/60 text-bronze font-display text-lg leading-none"
            aria-hidden="true"
          >
            A
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-white text-lg tracking-wide">
              {brand.name.split(" ")[0]}
            </span>
            <span className="text-[10px] uppercase tracking-eyebrow text-bronze-light/90">
              {brand.name.split(" ").slice(1).join(" ")}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-[13px] uppercase tracking-eyebrow font-medium text-white/80 hover:text-bronze-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+10000000000"
            className="flex items-center gap-2 text-[12px] uppercase tracking-eyebrow text-white/70 hover:text-bronze-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+1 (000) 000-0000</span>
          </a>
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 bg-bronze hover:bg-bronze-dark text-white px-5 py-2.5 text-[12px] uppercase tracking-eyebrow font-semibold transition-colors"
          >
            Request a quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 text-white"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-steel-deep/95 backdrop-blur-md ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <div className="container-x py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-eyebrow text-white/80 hover:text-bronze-light py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-bronze hover:bg-bronze-dark text-white px-5 py-3 text-[12px] uppercase tracking-eyebrow font-semibold"
          >
            Request a quote
          </a>
        </div>
      </div>
    </header>
  );
}
