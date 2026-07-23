import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ onSearch }) {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";
  const transparent = onHome && !scrolled && !mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-luxe",
        transparent
          ? "bg-transparent"
          : "border-b border-line bg-cream/90 shadow-[0_8px_30px_-20px_rgba(33,26,21,0.4)] backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20 lg:px-12">
        {/* Left: logo */}
        <Link
          to="/"
          className={cn(
            "font-display text-xl md:text-2xl font-semibold tracking-[0.28em] transition-colors duration-300",
            transparent ? "text-ivory" : "text-espresso"
          )}
        >
          VELMORA
        </Link>

        {/* Center: links */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={cn(
                "link-underline font-body text-[12px] font-medium uppercase tracking-widest2 transition-colors duration-300",
                transparent ? "text-ivory/90 hover:text-ivory" : "text-cocoa hover:text-espresso"
              )}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right: icons */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={onSearch}
            aria-label="Search"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
              transparent ? "text-ivory hover:bg-ivory/10" : "text-espresso hover:bg-sand"
            )}
          >
            <Search size={19} strokeWidth={1.6} />
          </button>
          <button
            type="button"
            onClick={openCart}
            aria-label="Open cart"
            className={cn(
              "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
              transparent ? "text-ivory hover:bg-ivory/10" : "text-espresso hover:bg-sand"
            )}
          >
            <ShoppingBag size={19} strokeWidth={1.6} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 font-body text-[10px] font-bold text-espresso">
                {count}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 md:hidden",
              transparent ? "text-ivory hover:bg-ivory/10" : "text-espresso hover:bg-sand"
            )}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-b border-line bg-cream transition-all duration-500 ease-luxe md:hidden",
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-5 py-4">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="border-b border-line/60 py-3.5 font-body text-sm font-medium uppercase tracking-widest2 text-espresso last:border-0"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
