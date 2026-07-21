import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ onSearchOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const onDarkHero = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const linkBase = onDarkHero
    ? "text-ivory/80 hover:text-ivory"
    : "text-ink/70 hover:text-ink";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || location.pathname !== "/"
          ? "bg-ivory/95 backdrop-blur-md border-b border-line shadow-[0_8px_30px_-18px_rgba(30,25,19,0.25)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        {/* Mobile menu button */}
        <button
          className={`md:hidden p-2 -ml-2 ${onDarkHero ? "text-ivory" : "text-ink"}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link
          to="/"
          className={`font-serif text-xl md:text-2xl font-semibold tracking-[0.35em] uppercase transition-colors ${
            onDarkHero ? "text-ivory" : "text-ink"
          }`}
        >
          Velmora
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[11px] font-semibold uppercase tracking-[0.25em] transition-colors ${linkBase} ${
                  isActive ? "underline underline-offset-8 decoration-gold" : ""
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 md:gap-3">
          <button
            onClick={onSearchOpen}
            aria-label="Search"
            className={`p-2 transition-colors ${
              onDarkHero ? "text-ivory/80 hover:text-ivory" : "text-ink/70 hover:text-ink"
            }`}
          >
            <Search size={19} strokeWidth={1.5} />
          </button>
          <button
            onClick={openCart}
            aria-label="Open cart"
            className={`relative p-2 transition-colors ${
              onDarkHero ? "text-ivory/80 hover:text-ivory" : "text-ink/70 hover:text-ink"
            }`}
          >
            <ShoppingBag size={19} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-ivory">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-ivory border-b border-line transition-all duration-300 ${
          mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="py-3 text-[12px] font-semibold uppercase tracking-[0.25em] text-ink/80 border-b border-line/60 last:border-0"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
