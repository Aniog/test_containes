import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?cat=earrings", label: "Collections" },
  { to: "/#story", label: "About" },
  { to: "/#journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Transparent only over the homepage hero before scrolling
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
        transparent
          ? "bg-transparent"
          : "bg-cream/95 backdrop-blur-md border-b border-stone shadow-[0_1px_0_0_rgba(228,217,198,0.6)]"
      )}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Mobile menu button */}
        <button
          className={cn(
            "md:hidden p-2 -ml-2 transition-colors",
            transparent ? "text-cream" : "text-ink"
          )}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={cn(
            "font-serif text-xl md:text-2xl font-medium tracking-[0.3em] uppercase transition-colors duration-500",
            transparent ? "text-cream" : "text-ink"
          )}
        >
          Velmora
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                className={cn(
                  "text-[12px] font-sans font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold",
                  transparent ? "text-cream/90" : "text-ink-soft"
                )}
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] font-sans font-medium uppercase tracking-[0.18em] transition-colors duration-300 hover:text-gold",
                    transparent ? "text-cream/90" : "text-ink-soft",
                    isActive && "text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-2">
          <button
            aria-label="Search"
            className={cn(
              "p-2 transition-colors duration-300 hover:text-gold",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Open cart"
            onClick={openCart}
            className={cn(
              "relative p-2 transition-colors duration-300 hover:text-gold",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={cn(
          "md:hidden overflow-hidden border-b border-stone bg-cream transition-[max-height] duration-500 ease-luxe",
          mobileOpen ? "max-h-72" : "max-h-0 border-b-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) =>
            link.to.startsWith("/#") ? (
              <a
                key={link.label}
                href={link.to}
                className="py-3 text-[12px] font-sans font-medium uppercase tracking-[0.2em] text-ink-soft border-b border-stone/60 last:border-0"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                className="py-3 text-[12px] font-sans font-medium uppercase tracking-[0.2em] text-ink-soft border-b border-stone/60 last:border-0"
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
