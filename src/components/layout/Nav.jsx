import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  // Pages that have a transparent hero (nav starts transparent)
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-soft",
          transparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 backdrop-blur-sm text-ink border-b border-hairline"
        )}
      >
        <div className="container-wide flex h-16 md:h-20 items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden -ml-2 p-2"
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl md:text-2xl tracking-[0.32em] font-light"
            aria-label="Velmora — Home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] uppercase tracking-wider-2 font-medium transition-colors duration-300 hover:text-gold",
                    isActive && location.search === "" && l.to === location.pathname
                      ? "text-gold"
                      : ""
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="p-2 hover:text-gold transition-colors duration-300"
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
              onClick={openCart}
              className="relative p-2 hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-medium tracking-normal",
                    transparent
                      ? "bg-ivory text-espresso"
                      : "bg-espresso text-ivory"
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/60"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-ivory text-ink transition-transform duration-500 ease-out-soft flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
            <span className="font-serif text-xl tracking-[0.32em] font-light">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="py-4 font-serif text-2xl font-light border-b border-hairline last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-6 py-6 border-t border-hairline">
            <p className="text-xs uppercase tracking-wider-2 text-ink-muted">
              Free worldwide shipping over $75
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
