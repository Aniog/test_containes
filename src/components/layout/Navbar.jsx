import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?collection=bestsellers", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparentOnTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  useEffect(() => {
    if (!transparentOnTop) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentOnTop]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const isSolid = scrolled || !transparentOnTop || mobileOpen;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-500",
        isSolid
          ? "bg-velmora-cream/95 backdrop-blur-sm border-b border-velmora-line"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 -ml-2 transition-colors duration-500",
              isSolid ? "text-velmora-espresso" : "text-velmora-cream",
            )}
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Left: desktop links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-9 flex-1 min-w-0">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] uppercase tracking-[0.24em] transition-colors duration-300 hover:opacity-70 whitespace-nowrap",
                    isSolid ? "text-velmora-espresso" : "text-velmora-cream",
                    isActive && "opacity-100",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Center logo (mobile flow, desktop absolute) */}
          <Link
            to="/"
            className={cn(
              "font-serif tracking-[0.32em] font-light transition-colors duration-500",
              "text-xl md:text-2xl lg:text-3xl",
              "md:absolute md:left-1/2 md:-translate-x-1/2",
              isSolid ? "text-velmora-espresso" : "text-velmora-cream",
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Right icons */}
          <div
            className={cn(
              "flex items-center gap-4 md:gap-5 md:flex-1 md:justify-end transition-colors duration-500",
              isSolid ? "text-velmora-espresso" : "text-velmora-cream",
            )}
          >
            <button
              type="button"
              aria-label="Search"
              className="hidden md:inline-flex p-1 hover:text-velmora-gold transition-colors"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative p-1 hover:text-velmora-gold transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-velmora-gold text-velmora-cream text-[10px] font-medium flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-velmora-line bg-velmora-cream velmora-fade-in">
          <nav className="px-5 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-sm uppercase tracking-[0.24em] text-velmora-espresso"
              >
                {link.label}
              </NavLink>
            ))}
            <button className="flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-velmora-espresso">
              <Search size={16} strokeWidth={1.5} /> Search
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
