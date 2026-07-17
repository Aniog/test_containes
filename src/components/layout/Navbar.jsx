import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Transparent only over the homepage hero; solid elsewhere.
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const solid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-cream/95 backdrop-blur-md border-b border-line shadow-soft"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="max-w-content mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left: mobile menu + logo */}
          <div className="flex items-center gap-3 flex-1">
            <button
              type="button"
              className="md:hidden text-ink"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-3xl tracking-[0.22em] transition-colors",
                solid ? "text-ink" : "text-cream"
              )}
            >
              VELMORA
            </Link>
          </div>

          {/* Center: links */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={cn(
                  "text-xs uppercase tracking-[0.16em] transition-colors hover:text-gold",
                  solid ? "text-ink-soft" : "text-cream/90"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right: icons */}
          <div className="flex items-center gap-4 md:gap-5 flex-1 justify-end">
            <button
              type="button"
              aria-label="Search"
              className={cn("transition-colors hover:text-gold", solid ? "text-ink" : "text-cream")}
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn(
                "relative transition-colors hover:text-gold",
                solid ? "text-ink" : "text-cream"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream border-t border-line">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="py-3 text-sm uppercase tracking-[0.16em] text-ink-soft border-b border-line/60 last:border-0"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
