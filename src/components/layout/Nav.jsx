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

export default function Nav({ transparentOverHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // If we're not over a hero (e.g. inner pages), always be solid.
  const isTransparent = transparentOverHero && !scrolled && !mobileOpen;

  const wrapperBase =
    "fixed top-0 inset-x-0 z-40 transition-colors duration-500 ease-out";
  const wrapperVariant = isTransparent
    ? "bg-transparent text-ivory"
    : "bg-ivory/95 backdrop-blur-sm text-ink border-b border-sand/70";

  return (
    <header className={`${wrapperBase} ${wrapperVariant}`}>
      <div className="max-w-page mx-auto flex items-center justify-between px-5 md:px-10 lg:px-16 h-16 md:h-20">
        {/* Mobile menu */}
        <button
          type="button"
          className="md:hidden p-2 -ml-2"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>

        {/* Left links (desktop) */}
        <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-editorial font-medium">
          {NAV_LINKS.slice(0, 2).map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition hover:text-gold ${isActive ? "text-gold" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Center logo */}
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl tracking-wider2 leading-none select-none"
          aria-label="Velmora — home"
        >
          VELMORA
        </Link>

        {/* Right links + icons (desktop) */}
        <div className="flex items-center gap-5 md:gap-7">
          <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-editorial font-medium">
            {NAV_LINKS.slice(2).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition hover:text-gold ${isActive ? "text-gold" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button type="button" aria-label="Search" className="p-1 hover:text-gold transition">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Cart, ${count} items`}
            className="relative p-1 hover:text-gold transition"
            onClick={openDrawer}
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-gold text-ivory text-[10px] leading-none rounded-full min-w-[16px] h-[16px] px-1 flex items-center justify-center font-medium">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-ivory text-ink border-t border-sand/70">
          <nav className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-5 py-3 text-sm uppercase tracking-editorial border-b border-sand/40 last:border-b-0 ${
                    isActive ? "text-gold" : "text-ink"
                  }`
                }
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
