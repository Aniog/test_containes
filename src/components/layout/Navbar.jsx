import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
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
          ? "bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-6 md:px-8">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-[#1B3A6B] text-white">
            <span className="font-bold text-lg tracking-tight">A</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-bold tracking-[0.18em] text-[#0E1726] uppercase">
              Artitect
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em] text-[#6B7280] uppercase">
              Machinery
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#3D4A5C] hover:text-[#1B3A6B] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[#1B3A6B] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#152d54] transition-colors"
          >
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[#0E1726] hover:bg-[#E5E7EB]/60"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E5E7EB] bg-white">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#E5E7EB] py-3 text-base font-medium text-[#0E1726] last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#1B3A6B] px-5 py-3 text-sm font-semibold text-white"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}