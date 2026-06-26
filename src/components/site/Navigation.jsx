import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import Logo from "./Logo";
import Button from "./Button";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleAnchor = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" onClick={(e) => handleAnchor(e, "top")} className="flex items-center">
            <Logo />
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleAnchor(e, l.id)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="md"
              onClick={(e) => handleAnchor(e, "contact")}
            >
              Request a quote
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground hover:bg-muted transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bottom-0 z-40 bg-background border-t border-border transition-all duration-300",
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="px-6 py-10 flex flex-col gap-2" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleAnchor(e, l.id)}
              className="flex items-center justify-between py-4 border-b border-border text-lg font-display font-medium text-foreground"
            >
              <span>{l.label}</span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
            </a>
          ))}
          <div className="pt-8">
            <Button
              as="a"
              href="#contact"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={(e) => handleAnchor(e, "contact")}
            >
              Request a quote
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}