import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
];

export default function Nav() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-cream-100/95 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent",
      )}
    >
      <div className="max-w-editorial mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1 -ml-1 text-ink"
            >
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            </button>
            <nav className="hidden lg:flex items-center gap-9">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className="eyebrow text-ink hover:text-gold transition-colors"
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-center">
            <Link
              to="/"
              className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] tracking-[0.32em] text-ink"
            >
              VELMORA
            </Link>
          </div>

          <div className="flex items-center justify-end gap-4 lg:gap-7">
            <button
              type="button"
              aria-label="Search"
              className="p-1 text-ink hover:text-gold transition-colors"
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative p-1 text-ink hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[16px] h-[16px] px-1 rounded-full bg-ink text-cream text-[9px] font-medium flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-out */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-opacity",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-[78%] max-w-[340px] bg-cream-100 transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-ink/10">
            <span className="font-serif text-[22px] tracking-[0.32em] text-ink">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-1"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="px-6 py-8 flex flex-col gap-7">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-ink"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
