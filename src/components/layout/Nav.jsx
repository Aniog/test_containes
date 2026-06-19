import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Shop", to: "/shop" },
  { label: "Collections", to: "/shop?view=collections" },
  { label: "About", to: "/#about" },
  { label: "Journal", to: "/#journal" },
];

export function Nav({ initialTransparent = false }) {
  const [scrolled, setScrolled] = useState(!initialTransparent);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // On Home with transparent initial, switch to solid after the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search, location.hash]);

  const solid = scrolled || location.pathname !== "/";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-elegant",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-hairline"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <nav
        className="max-w-container mx-auto px-5 md:px-8 lg:px-10 h-16 md:h-20 flex items-center justify-between"
        aria-label="Primary"
      >
        {/* Left: logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-[1.4rem] md:text-[1.6rem] tracking-[0.32em] font-medium transition-colors duration-500",
            solid ? "text-espresso" : "text-ivory",
          )}
        >
          VELMORA
        </Link>

        {/* Center: nav links */}
        <ul className="hidden md:flex items-center gap-9 lg:gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "eyebrow-sm transition-colors duration-300 relative",
                    solid
                      ? "text-ink/85 hover:text-ink"
                      : "text-ivory/90 hover:text-ivory",
                    isActive &&
                      (solid
                        ? "text-ink after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-gold"
                        : "text-ivory after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1.5 after:h-px after:bg-gold-light"),
                  )
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: icons */}
        <div className="flex items-center gap-1.5 md:gap-3">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "w-10 h-10 flex items-center justify-center transition-colors duration-300",
              solid ? "text-ink hover:text-espresso" : "text-ivory hover:text-ivory/80",
            )}
          >
            <Search className="w-[1.05rem] h-[1.05rem]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart with ${itemCount} items`}
            className={cn(
              "relative w-10 h-10 flex items-center justify-center transition-colors duration-300",
              solid ? "text-ink hover:text-espresso" : "text-ivory hover:text-ivory/80",
            )}
          >
            <ShoppingBag className="w-[1.05rem] h-[1.05rem]" strokeWidth={1.4} />
            {itemCount > 0 && (
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center tabular-nums",
                  solid ? "bg-espresso text-ivory" : "bg-ivory text-espresso",
                )}
              >
                {itemCount}
              </span>
            )}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((s) => !s)}
            className={cn(
              "md:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300",
              solid ? "text-ink" : "text-ivory",
            )}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.4} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden bg-cream/98 backdrop-blur-md transition-all duration-500 ease-elegant",
          mobileOpen ? "max-h-[420px] border-b border-hairline" : "max-h-0",
        )}
      >
        <ul className="px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block font-serif text-2xl text-ink"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-3 border-t border-hairline">
            <Link
              to="/shop"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full"
            >
              Shop the Collection
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}