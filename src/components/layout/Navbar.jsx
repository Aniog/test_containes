import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?view=collections", label: "Collections" },
  { to: "/#about", label: "About" },
  { to: "/#journal", label: "Journal" },
];

export default function Navbar({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isTransparent = transparent && !scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-cream/95 backdrop-blur-md border-b border-hairline"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-10 transition-all duration-500",
          isTransparent ? "py-6" : "py-4"
        )}
      >
        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className={cn(
            "md:hidden -ml-2 p-2 transition-colors",
            isTransparent ? "text-cream" : "text-espresso"
          )}
          aria-label="Open menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-2xl md:text-3xl tracking-[0.28em] uppercase font-light",
            "md:flex-1 md:order-none order-2 text-center md:text-left",
            isTransparent ? "text-cream" : "text-espresso"
          )}
        >
          Velmora
        </Link>

        {/* Center nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          {LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={cn(
                "text-[11px] uppercase tracking-[0.3em] font-medium transition-colors duration-300",
                isTransparent
                  ? "text-cream/85 hover:text-gold-light"
                  : "text-espresso/80 hover:text-gold-deep"
              )}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div
          className={cn(
            "flex flex-1 items-center justify-end gap-3 md:gap-5",
            isTransparent ? "text-cream" : "text-espresso"
          )}
        >
          <button
            type="button"
            aria-label="Search"
            className="p-2 transition-colors duration-300 hover:text-gold-deep"
          >
            <Search className="h-5 w-5" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className="relative p-2 transition-colors duration-300 hover:text-gold-deep"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            {itemCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gold px-1.5 text-[10px] font-semibold text-cream">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-cream velmora-fade-in">
          <nav className="flex flex-col px-5 py-4">
            {LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-xs uppercase tracking-[0.3em] text-espresso/80 border-b border-hairline last:border-b-0"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
