import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const centerLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totals, openCart } = useCart();
  const location = useLocation();

  // Determine if we're on the homepage hero (transparent over hero).
  // For simplicity: always start transparent at top of page; turn solid on scroll.
  // On other pages, show solid by default (after a tiny scroll threshold).
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out",
        transparent
          ? "bg-transparent text-espresso"
          : "bg-canvas/95 backdrop-blur-sm text-espresso border-b border-dune"
      )}
    >
      <div className="max-w-editorial mx-auto px-6 md:px-10">
        <div className="h-16 md:h-20 grid grid-cols-3 items-center">
          {/* Left: logo (mobile shows menu button instead) */}
          <div className="flex items-center justify-start">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
            <Link
              to="/"
              className="hidden md:inline-block font-serif text-2xl tracking-[0.32em] font-light"
            >
              VELMORA
            </Link>
          </div>

          {/* Center: links */}
          <nav className="hidden md:flex items-center justify-center gap-10">
            {centerLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] uppercase tracking-widest2 font-medium relative py-1 transition-colors",
                    "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500",
                    "hover:after:w-full",
                    isActive && "after:w-6 text-espresso"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile: center logo */}
          <Link
            to="/"
            className="md:hidden font-serif text-xl tracking-[0.32em] font-light text-center"
          >
            VELMORA
          </Link>

          {/* Right: search + cart */}
          <div className="flex items-center justify-end gap-4 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className="p-1 hover:text-gold transition-colors duration-300"
            >
              <Search className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label={`Open cart with ${totals.count} items`}
              onClick={openCart}
              className="relative p-1 hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag className="h-4 w-4 md:h-[18px] md:w-[18px]" strokeWidth={1.25} />
              {totals.count > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-espresso text-canvas text-[9px] font-medium flex items-center justify-center"
                >
                  {totals.count}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 right-1/3 min-h-screen bg-canvas text-espresso p-6 transform transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-2xl tracking-[0.32em]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {centerLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className="font-serif text-3xl tracking-tight"
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-12 pt-8 border-t border-dune text-[11px] uppercase tracking-widest2 text-taupe">
            <p>Free worldwide shipping</p>
            <p className="mt-2">30-day returns</p>
          </div>
        </div>
      </div>
    </header>
  );
}
