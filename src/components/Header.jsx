import React from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-paper/85 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-[28px] tracking-wide text-ink leading-none">
            ARTITECT
          </span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-steel">
            Machinery
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/80 hover:text-ink transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center bg-ink text-white hover:bg-graphite px-5 py-2.5 text-xs uppercase tracking-[0.18em] transition-colors"
        >
          Request a Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden text-ink p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink/80 hover:text-ink py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center bg-ink text-white px-5 py-3 text-xs uppercase tracking-[0.18em]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
