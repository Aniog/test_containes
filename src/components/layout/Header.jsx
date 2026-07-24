import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Earrings" },
  { to: "/shop?category=huggies", label: "Huggies" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Header({ tone = "auto" }) {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Transparent over hero only on home page top; everywhere else solid.
  const isHome = location.pathname === "/";
  const transparent = tone === "transparent" || (tone === "auto" && isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  const solid = !transparent || scrolled;
  const textOnDark = transparent && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-elegant",
          solid
            ? "bg-bone/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-8xl px-5 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Left: hamburger (mobile) + spacer */}
            <div className="flex items-center gap-3 md:hidden">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "p-2 -ml-2",
                  textOnDark ? "text-bone" : "text-ink"
                )}
              >
                <Menu className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>

            {/* Logo */}
            <Link
              to="/"
              aria-label="Velmora home"
              className={cn(
                "font-serif text-xl md:text-2xl tracking-wide-3 uppercase",
                textOnDark ? "text-bone" : "text-ink"
              )}
            >
              Velmora
            </Link>

            {/* Center nav (desktop) */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] font-medium tracking-wide-3 uppercase transition-colors duration-300",
                      textOnDark
                        ? "text-bone/90 hover:text-bone"
                        : "text-ink/80 hover:text-ink",
                      isActive && (textOnDark ? "text-bone" : "text-ink")
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className="flex items-center gap-1 md:gap-3">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 transition-colors duration-300",
                  textOnDark ? "text-bone hover:text-bone/80" : "text-ink hover:text-ink/70"
                )}
              >
                <Search className="w-5 h-5" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
                onClick={openCart}
                className={cn(
                  "relative p-2 transition-colors duration-300",
                  textOnDark ? "text-bone hover:text-bone/80" : "text-ink hover:text-ink/70"
                )}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.4} />
                {count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full text-[10px] font-medium leading-none",
                      textOnDark
                        ? "bg-bone text-ink"
                        : "bg-ink text-bone"
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/60"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 right-1/3 bg-bone shadow-drawer flex flex-col transition-transform duration-500 ease-elegant",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-hairline">
            <span className="font-serif text-lg tracking-wide-3 uppercase text-ink">Velmora</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-ink"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex-1 px-5 py-8 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl py-2 transition-colors",
                    isActive ? "text-gold" : "text-ink hover:text-gold"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-5 py-6 border-t border-hairline text-xs text-cocoa tracking-wide-2 uppercase">
            Free worldwide shipping over $75
          </div>
        </div>
      </div>
    </>
  );
}
