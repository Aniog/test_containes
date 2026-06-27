import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Home page hero is dark — start transparent. Other pages always solid.
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile on route change.
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock scroll when mobile menu open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = !isHome || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-out",
          solid
            ? "bg-[var(--color-bone)]/95 backdrop-blur-md border-b border-[var(--color-line)]"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="h-16 sm:h-20 grid grid-cols-[1fr_auto_1fr] items-center">
            {/* Left — desktop links / mobile menu trigger */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "md:hidden -ml-2 p-2",
                  solid ? "text-[var(--color-ink)]" : "text-[var(--color-bone)]"
                )}
                aria-label="Open menu"
              >
                <Menu size={22} strokeWidth={1.5} />
              </button>
              <nav className="hidden md:flex items-center gap-8">
                {LINKS.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "font-sans text-[0.72rem] uppercase tracking-eyebrow font-medium",
                        "link-underline transition-colors",
                        solid ? "text-[var(--color-ink)]" : "text-[var(--color-bone)]",
                        isActive && "text-[var(--color-gold-deep)]"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Center — logo */}
            <Link
              to="/"
              aria-label="Velmora — Home"
              className={cn(
                "font-serif text-2xl sm:text-[1.7rem] tracking-display font-light",
                "transition-colors",
                solid ? "text-[var(--color-ink)]" : "text-[var(--color-bone)]"
              )}
            >
              VELMORA
            </Link>

            {/* Right — search + cart */}
            <div className="flex items-center justify-end gap-1 sm:gap-3">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors",
                  solid ? "text-[var(--color-ink)] hover:text-[var(--color-gold-deep)]" : "text-[var(--color-bone)] hover:text-[var(--color-gold-soft)]"
                )}
              >
                <Search size={18} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
                className={cn(
                  "relative p-2 transition-colors",
                  solid ? "text-[var(--color-ink)] hover:text-[var(--color-gold-deep)]" : "text-[var(--color-bone)] hover:text-[var(--color-gold-soft)]"
                )}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full",
                      "flex items-center justify-center text-[10px] font-medium leading-none",
                      "bg-[var(--color-gold)] text-[var(--color-bone)]"
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-[var(--color-ink)]/50 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-[85%] max-w-sm bg-[var(--color-bone)]",
            "flex flex-col p-6 transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-serif text-2xl tracking-display text-[var(--color-ink)]"
              onClick={() => setMobileOpen(false)}
            >
              VELMORA
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-[var(--color-ink)]"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <div className="mt-12 flex flex-col gap-6">
            {LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl text-[var(--color-ink)] hover:text-[var(--color-gold-deep)] transition-colors",
                    isActive && "text-[var(--color-gold-deep)]"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-auto pt-8 border-t border-[var(--color-line)] flex flex-col gap-2 text-sm text-[var(--color-stone)]">
            <p>Free worldwide shipping</p>
            <p>30-day returns</p>
          </div>
        </div>
      </div>
    </>
  );
}