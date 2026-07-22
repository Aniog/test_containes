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
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-ivory/95 backdrop-blur-md border-b border-sand/30"
      )}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              className={cn(
                "md:hidden p-1 -ml-1",
                transparent ? "text-ivory" : "text-ink"
              )}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors",
                transparent ? "text-ivory" : "text-ink"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center links */}
          <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  "text-[11px] uppercase tracking-widest2 font-medium transition-colors hover:text-gold",
                  transparent ? "text-ivory/90" : "text-ink"
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 flex-1 justify-end">
            <button
              className={cn(
                "p-1 transition-colors hover:text-gold",
                transparent ? "text-ivory" : "text-ink"
              )}
              aria-label="Search"
            >
              <Search size={19} />
            </button>
            <button
              onClick={openCart}
              className={cn(
                "relative p-1 transition-colors hover:text-gold",
                transparent ? "text-ivory" : "text-ink"
              )}
              aria-label="Open cart"
            >
              <ShoppingBag size={19} />
              {count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-ivory text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory border-t border-sand/30">
          <div className="px-5 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-sm uppercase tracking-widest2 font-medium text-ink hover:text-gold"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
