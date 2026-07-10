import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/store/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
];

// A reusable link that closes mobile menu on click.
function NavItem({ to, label, end, onClick, transparent }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "relative text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ease-editorial",
          transparent ? (isActive ? "text-ivory-light" : "text-ivory/85 hover:text-ivory-light") : (isActive ? "text-claret" : "text-cocoa hover:text-claret")
        )
      }
    >
      {label}
    </NavLink>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Determine whether the current route has a dark hero so the navbar
  // starts transparent.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-editorial",
        transparent
          ? "bg-transparent"
          : "bg-ivory-light/95 backdrop-blur-sm border-b border-hairline"
      )}
    >
      <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-12">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Left: hamburger on mobile, nav on desktop */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden h-10 w-10 flex items-center justify-center -ml-2",
                transparent ? "text-ivory" : "text-cocoa"
              )}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((l) => (
                <NavItem key={l.to} {...l} transparent={transparent} />
              ))}
            </nav>
          </div>

          {/* Center: serif logo */}
          <Link
            to="/"
            aria-label="Velmora home"
            className={cn(
              "serif-display text-2xl md:text-[28px] tracking-[0.15em] uppercase font-medium transition-colors duration-500",
              transparent ? "text-ivory-light" : "text-cocoa"
            )}
          >
            VELMORA
          </Link>

          {/* Right: search + cart */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "h-10 w-10 flex items-center justify-center transition-colors duration-300",
                transparent ? "text-ivory hover:text-ivory-light" : "text-cocoa hover:text-claret"
              )}
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
              className={cn(
                "relative h-10 w-10 flex items-center justify-center transition-colors duration-300",
                transparent ? "text-ivory hover:text-ivory-light" : "text-cocoa hover:text-claret"
              )}
            >
              <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full text-[10px] font-medium flex items-center justify-center tabular-nums",
                    transparent ? "bg-ivory-light text-cocoa" : "bg-claret text-ivory-light"
                  )}
                  aria-hidden="true"
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-cocoa/30" onClick={onClose} />
      <div
        className={cn(
          "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory-light shadow-drawer transition-transform duration-500 ease-editorial",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
          <span className="serif-display text-xl tracking-[0.18em] uppercase text-cocoa">VELMORA</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="h-10 w-10 flex items-center justify-center text-cocoa"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "py-3 serif-display text-3xl text-cocoa",
                  isActive && "text-claret"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-6 mt-auto absolute bottom-8 left-0 right-0">
          <p className="text-[10px] uppercase tracking-wider2 text-muted">Customer Care</p>
          <p className="text-sm text-cocoa mt-1">care@velmora.com</p>
        </div>
      </div>
    </div>
  );
}
