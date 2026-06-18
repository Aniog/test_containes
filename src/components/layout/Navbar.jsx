import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=bestsellers", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparentOverHero = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const isTransparent = transparentOverHero && !scrolled && !mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500 ease-editorial",
        isTransparent
          ? "bg-transparent text-cream"
          : "bg-cream/95 backdrop-blur-md text-ink border-b border-hairline"
      )}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu */}
          <button
            type="button"
            className="md:hidden -ml-2 p-2"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl md:text-3xl tracking-wider2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-auto"
            aria-label="Velmora — home"
          >
            VELMORA
          </Link>

          {/* Center nav (desktop) */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-[12px] uppercase tracking-widest2 transition-colors duration-300",
                    isActive ? "text-champagne" : "hover:text-champagne"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4 md:gap-5 ml-auto md:ml-0">
            <button
              type="button"
              aria-label="Search"
              className="p-1.5 hover:text-champagne transition-colors duration-300"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Cart (${itemCount} items)`}
              className="relative p-1.5 hover:text-champagne transition-colors duration-300"
              onClick={openCart}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 ? (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-1 min-w-[16px] h-[16px] px-1 rounded-full text-[9px] flex items-center justify-center font-medium",
                    "bg-champagne text-cream"
                  )}
                >
                  {itemCount}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen ? (
        <div className="md:hidden border-t border-hairline bg-cream text-ink">
          <nav className="flex flex-col px-5 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="font-sans text-sm uppercase tracking-widest2 hover:text-champagne"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
