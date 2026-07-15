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
  const { count, openDrawer } = useCart();
  const { pathname } = useLocation();
  const onHomeHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Solid background if not on home hero, or after scroll
  const solid = !onHomeHero || scrolled;
  const dark = onHomeHero && !scrolled; // transparent over hero, light text

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        solid
          ? "bg-ivory/95 backdrop-blur-md border-b border-sable/10"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex items-center justify-between h-16 sm:h-20">
        {/* Mobile menu trigger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className={cn(
            "lg:hidden p-2 -ml-2 transition-colors",
            dark ? "text-ivory" : "text-sable"
          )}
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          aria-label="Velmora — home"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0"
        >
          <span
            className={cn(
              "font-serif text-2xl sm:text-[28px] tracking-[0.18em] sm:tracking-[0.22em] font-light",
              dark ? "text-ivory" : "text-sable"
            )}
          >
            VELMORA
          </span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "font-sans text-[12px] font-medium tracking-widest2 uppercase transition-colors duration-300",
                  dark
                    ? isActive
                      ? "text-gold-light"
                      : "text-ivory/85 hover:text-ivory"
                    : isActive
                      ? "text-gold"
                      : "text-sable/80 hover:text-sable"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-1 sm:gap-3 ml-auto lg:ml-0">
          <button
            type="button"
            aria-label="Search"
            className={cn(
              "p-2 transition-colors",
              dark ? "text-ivory hover:text-gold-light" : "text-sable hover:text-gold"
            )}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label={`Cart (${count})`}
            onClick={openDrawer}
            className={cn(
              "relative p-2 transition-colors",
              dark ? "text-ivory hover:text-gold-light" : "text-sable hover:text-gold"
            )}
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-gold text-ivory text-[10px] font-sans font-semibold leading-none w-4 h-4 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-sable/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-[85%] max-w-sm bg-ivory shadow-drawer transition-transform duration-500 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-sable/10">
            <span className="font-serif text-xl tracking-[0.22em] text-sable">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-sable"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 px-5 py-8 flex flex-col gap-6">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl font-light",
                    isActive ? "text-gold" : "text-sable"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 pb-8 text-[11px] tracking-widest2 uppercase text-taupe">
            Free worldwide shipping over $75
          </div>
        </div>
      </div>
    </header>
  );
}
