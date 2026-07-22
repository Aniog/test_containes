import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop", label: "Collections", state: { from: "collections" } },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function SiteHeader() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-noir-line bg-noir/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        {/* Left: mobile menu + logo */}
        <div className="flex flex-1 items-center gap-3">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-cream transition-colors hover:text-gold md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <Link
            to="/"
            className="font-serif text-xl font-semibold uppercase tracking-[0.3em] text-cream transition-colors hover:text-gold md:text-2xl"
          >
            Velmora
          </Link>
        </div>

        {/* Center: nav */}
        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-[11px] font-medium uppercase tracking-luxe transition-colors duration-300",
                  isActive && link.label === "Shop"
                    ? "text-gold"
                    : "text-cream/80 hover:text-gold"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center text-cream transition-colors hover:text-gold"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${count} items`}
            className="relative inline-flex h-10 w-10 items-center justify-center text-cream transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-noir">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-noir-line bg-noir transition-all duration-500 md:hidden",
          menuOpen ? "max-h-80 border-b" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="py-2.5 text-xs font-medium uppercase tracking-luxe text-cream/85 transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
