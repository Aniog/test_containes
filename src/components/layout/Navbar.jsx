import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-ivory/95 backdrop-blur-md border-b border-sand"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + desktop links */}
          <div className="flex items-center gap-6 flex-1">
            <button
              type="button"
              className="md:hidden text-ink"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <ul className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className={cn(
                      "text-[11px] uppercase tracking-[0.2em] transition-colors duration-300",
                      transparent ? "text-ivory hover:text-champagne" : "text-ink hover:text-gold"
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl md:text-3xl tracking-[0.3em] transition-colors duration-300",
              transparent ? "text-ivory" : "text-ink"
            )}
          >
            VELMORA
          </Link>

          {/* Right: icons */}
          <div className="flex items-center justify-end gap-4 md:gap-5 flex-1">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "transition-colors duration-300",
                transparent ? "text-ivory hover:text-champagne" : "text-ink hover:text-gold"
              )}
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label="Open cart"
              className={cn(
                "relative transition-colors duration-300",
                transparent ? "text-ivory hover:text-champagne" : "text-ink hover:text-gold"
              )}
            >
              <ShoppingBag size={20} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand animate-fade">
          <ul className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="block py-3 text-sm uppercase tracking-[0.2em] text-ink border-b border-sand/60"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
