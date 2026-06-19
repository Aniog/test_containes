import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  // Reset mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Detect scroll past the hero (~80px) to switch navbar appearance.
  // We only apply transparent-when-over-hero behaviour on the homepage;
  // every other page uses the solid treatment from the start.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-soft-out",
        solid
          ? "bg-bone/95 backdrop-blur-sm border-b border-line text-ink"
          : "bg-transparent text-bone"
      )}
    >
      <div className="container-velmora flex items-center justify-between h-16 md:h-20">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className={cn(
            "md:hidden -ml-2 p-2 transition-colors",
            solid ? "text-ink hover:text-ink-soft" : "text-bone hover:text-bone/80"
          )}
        >
          <Menu className="w-5 h-5" strokeWidth={1.4} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          aria-label="Velmora home"
          className={cn(
            "font-serif text-xl md:text-2xl tracking-[0.32em] font-light transition-colors",
            solid ? "text-ink" : "text-bone"
          )}
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] uppercase tracking-product font-medium transition-colors duration-300",
                  solid
                    ? isActive
                      ? "text-ink"
                      : "text-ink-soft hover:text-ink"
                    : isActive
                      ? "text-bone"
                      : "text-bone/85 hover:text-bone"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "p-2 transition-colors",
              solid ? "text-ink hover:text-ink-soft" : "text-bone hover:text-bone/80"
            )}
          >
            <Search className="w-5 h-5" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${count} items`}
            onClick={openCart}
            className={cn(
              "relative p-2 transition-colors",
              solid ? "text-ink hover:text-ink-soft" : "text-bone hover:text-bone/80"
            )}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
            {count > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center",
                  solid ? "bg-ink text-bone" : "bg-bone text-ink"
                )}
              >
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[86%] max-w-sm bg-bone text-ink shadow-xl transition-transform duration-500 ease-soft-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-line">
            <Link
              to="/"
              className="font-serif text-xl tracking-[0.32em] font-light"
              onClick={() => setMobileOpen(false)}
            >
              VELMORA
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="font-serif text-3xl font-light tracking-tight text-ink"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 mt-2 text-[11px] uppercase tracking-eyebrow text-ink-soft">
            Free worldwide shipping · 30-day returns
          </div>
        </div>
      </div>
    </header>
  );
}