import React, { useEffect, useState, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useCart } from "@/context/CartContext.jsx";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  // Pages that are not the home hero should always show a solid nav
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          transparent
            ? "bg-transparent text-cream-100"
            : "bg-cream-100/95 text-ink-800 backdrop-blur-sm border-b border-hairline/60"
        )}
      >
        <div className="mx-auto max-w-editorial px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Mobile burger */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden -ml-2 p-2 transition-opacity",
                transparent ? "text-cream-100" : "text-ink-800"
              )}
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              aria-label="Velmora — Home"
              className={cn(
                "font-serif text-xl sm:text-2xl tracking-[0.4em] font-medium pl-1",
                "lg:flex-none"
              )}
            >
              VELMORA
            </Link>

            {/* Center links (desktop) */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] font-medium uppercase tracking-[0.32em] transition-opacity duration-300",
                      "hover:opacity-70",
                      isActive && (l.to === "/shop" ? location.search === "" && isActive : isActive)
                        ? "opacity-100"
                        : "opacity-90"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            {/* Right icons */}
            <div className="flex items-center gap-1 sm:gap-2 -mr-2">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-opacity hover:opacity-70",
                  transparent ? "text-cream-100" : "text-ink-800"
                )}
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <Link
                to="/shop"
                aria-label="Wishlist"
                className={cn(
                  "hidden sm:inline-flex p-2 transition-opacity hover:opacity-70",
                  transparent ? "text-cream-100" : "text-ink-800"
                )}
              >
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <button
                type="button"
                aria-label={`Cart, ${count} items`}
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-opacity hover:opacity-70",
                  transparent ? "text-cream-100" : "text-ink-800"
                )}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                {count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] rounded-full text-[10px] font-medium flex items-center justify-center px-1",
                      transparent
                        ? "bg-cream-100 text-ink-800"
                        : "bg-ink-800 text-cream-100"
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}

function MobileMenu({ open, onClose, navLinks }) {
  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className="absolute inset-0 bg-ink-900/40"
        onClick={onClose}
        aria-hidden
      />
      <div
        className={cn(
          "absolute top-0 left-0 right-0 bg-cream-100 text-ink-800 shadow-drawer",
          "transition-transform duration-300",
          open ? "translate-y-0" : "-translate-y-full"
        )}
        role="dialog"
        aria-label="Site menu"
      >
        <div className="flex items-center justify-between px-4 sm:px-6 h-16 border-b border-hairline/60">
          <span className="font-serif text-xl tracking-[0.4em]">VELMORA</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="p-2 -mr-2"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="px-4 sm:px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      "block py-2 font-serif text-2xl tracking-wide",
                      isActive ? "text-gold-400" : "text-ink-800"
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
