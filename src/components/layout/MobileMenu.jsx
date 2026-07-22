import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function MobileMenu() {
  const { mobileMenuOpen, setMobileMenuOpen } = useCart();

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  return (
    <div
      aria-hidden={!mobileMenuOpen}
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink/60"
        onClick={() => setMobileMenuOpen(false)}
      />
      {/* Panel */}
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-[82%] max-w-sm bg-cream border-r border-line",
          "transition-transform duration-500 ease-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-line">
          <span className="font-serif text-xl tracking-[0.32em] uppercase">Velmora</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2 text-ink"
          >
            <X strokeWidth={1.25} className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-1">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl py-3 border-b border-line/70 text-ink hover:text-gold-deep transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="px-6 py-6 mt-auto text-[11px] uppercase tracking-wider-3 text-muted font-sans">
          Free worldwide shipping over $75
        </div>
      </div>
    </div>
  );
}
