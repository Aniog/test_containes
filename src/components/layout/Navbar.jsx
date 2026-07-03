import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Solid on scroll, transparent over hero on the homepage only
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          solid
            ? "bg-ivory/95 backdrop-blur border-b border-hairline text-ink"
            : "bg-transparent text-ivory",
        )}
      >
        <div className="container-page flex items-center justify-between h-16 md:h-20">
          {/* Left — logo */}
          <Link
            to="/"
            className={cn(
              "font-serif tracking-[0.32em] text-xl md:text-2xl font-light transition-colors",
              solid ? "text-ink" : "text-ivory",
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center — nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "eyebrow transition-colors duration-300",
                    solid
                      ? isActive
                        ? "text-gold"
                        : "text-ink hover:text-gold"
                      : isActive
                        ? "text-gold-soft"
                        : "text-ivory hover:text-gold-soft",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right — icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              className={cn(
                "p-2 transition-colors",
                solid ? "text-ink hover:text-gold" : "text-ivory hover:text-gold-soft",
              )}
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors",
                solid ? "text-ink hover:text-gold" : "text-ivory hover:text-gold-soft",
              )}
              aria-label="Open bag"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 text-[10px] font-medium leading-[18px] text-center rounded-full",
                    solid ? "bg-ink text-ivory" : "bg-ivory text-ink",
                  )}
                  aria-hidden="true"
                >
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden p-2 transition-colors",
                solid ? "text-ink hover:text-gold" : "text-ivory hover:text-gold-soft",
              )}
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-[78%] max-w-sm bg-ivory shadow-soft transition-transform duration-400 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-hairline">
            <span className="font-serif tracking-[0.32em] text-xl">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-ink"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-serif text-3xl text-ink hover:text-gold transition-colors"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-6 border-t border-hairline">
            <p className="eyebrow text-taupe">Customer Care</p>
            <p className="text-sm text-ink mt-2">care@velmora.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
