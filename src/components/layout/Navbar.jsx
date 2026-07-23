import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop",     label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about",    label: "About" },
  { to: "/journal",  label: "Journal" },
];

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const lastY = useRef(0);

  // Sticky scroll: transparent over hero, solid once you scroll.
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 40);
      lastY.current = y;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft",
        scrolled || mobileOpen
          ? "bg-bone-100/95 backdrop-blur-md border-b border-taupe-light/60"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-x flex h-16 sm:h-20 items-center justify-between">
        {/* Mobile burger */}
        <button
          type="button"
          className="lg:hidden -ml-2 p-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl sm:text-[26px] tracking-[0.04em] leading-none",
            "transition-colors",
            scrolled ? "text-espresso" : "text-bone-50",
          )}
          aria-label="Velmora — home"
        >
          VELMORA
        </Link>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "link-underline text-[11px] uppercase tracking-widest2 font-medium",
                  scrolled
                    ? "text-espresso"
                    : "text-bone-50",
                  isActive && "is-active",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "p-2 transition-colors",
              scrolled ? "text-espresso" : "text-bone-50",
            )}
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            onClick={openCart}
            className={cn(
              "relative p-2 transition-colors",
              scrolled ? "text-espresso" : "text-bone-50",
            )}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1",
                  "flex items-center justify-center rounded-full",
                  "text-[10px] font-medium tracking-wide",
                  scrolled
                    ? "bg-espresso text-bone-50"
                    : "bg-bone-50 text-espresso",
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onCartClick={openCart}
        itemCount={itemCount}
      />
    </header>
  );
}

function MobileMenu({ open, onClose, onCartClick, itemCount }) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        "lg:hidden fixed inset-0 z-50 transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <div
        className="absolute inset-0 bg-espresso/30"
        onClick={onClose}
      />
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-full max-w-sm bg-bone-100",
          "flex flex-col px-6 py-6 transition-transform duration-500 ease-out-soft",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl tracking-[0.04em]" onClick={onClose}>
            VELMORA
          </Link>
          <button type="button" onClick={onClose} aria-label="Close menu" className="p-2">
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile primary">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "display-serif text-3xl py-2 border-b border-taupe-light/60",
                  "transition-colors hover:text-gold-400",
                  isActive && "text-gold-400",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-8 flex items-center gap-3">
          <button
            type="button"
            onClick={() => { onClose(); onCartClick(); }}
            className="btn btn-outline flex-1"
          >
            View Cart{itemCount ? ` (${itemCount})` : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
