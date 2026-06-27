import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCartUi } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { itemCount, openCart } = useCartUi();
  const location = useLocation();

  // Track scroll to toggle "solid" nav style
  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu open
  React.useEffect(() => {
    if (mobileOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [mobileOpen]);

  // Solid = scrolled OR not on home (so PDP/Shop page never has a see-through nav)
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-sm border-b border-hairline text-ink"
          : "bg-transparent text-bone"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center">
        {/* Mobile menu trigger (left on mobile, hidden on desktop) */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="md:hidden -ml-1 p-1"
        >
          <Menu strokeWidth={1.25} className="w-5 h-5" />
        </button>

        {/* Logo (left) */}
        <Link
          to="/"
          className={cn(
            "font-serif text-xl md:text-2xl tracking-[0.18em] uppercase",
            "transition-colors duration-300",
            "md:mr-12"
          )}
        >
          Velmora
        </Link>

        {/* Center links (desktop) */}
        <nav className="hidden md:flex items-center gap-10 flex-1">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "text-xs uppercase tracking-button font-medium",
                  "transition-colors duration-300",
                  "hover:text-gold",
                  isActive && l.to === location.pathname + location.search
                    ? "text-gold"
                    : ""
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="ml-auto flex items-center gap-4 md:gap-6">
          <button
            type="button"
            aria-label="Search"
            className="hover:text-gold transition-colors duration-300"
          >
            <Search strokeWidth={1.25} className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            className="relative hover:text-gold transition-colors duration-300"
          >
            <ShoppingBag strokeWidth={1.25} className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-2 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full bg-gold text-cocoa text-[10px] font-medium">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div onClick={onClose} className="absolute inset-0 bg-cocoa/40" />
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bg-ivory text-ink",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
          <span className="font-serif text-xl tracking-[0.18em] uppercase">Velmora</span>
          <button type="button" onClick={onClose} aria-label="Close menu">
            <X strokeWidth={1.25} className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={onClose}
              className="py-4 font-serif text-2xl border-b border-hairline last:border-b-0"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
