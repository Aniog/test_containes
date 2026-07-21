import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  // For the home page, the hero is dark, so we want transparent-on-hero,
  // solid-on-scroll. For other pages, we always have the solid header.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-velmora",
          transparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 text-espresso backdrop-blur-md shadow-[0_1px_0_rgba(31,22,18,0.08)]"
        )}
      >
        <div className="mx-auto max-w-screen-3xl px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden -ml-2 p-2"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="font-serif text-2xl sm:text-[28px] tracking-[0.18em] leading-none -mt-0.5"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Center nav */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[12px] uppercase tracking-[0.22em] font-medium link-underline",
                      isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                type="button"
                aria-label="Search"
                className="p-2 hidden sm:inline-flex"
              >
                <Search className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Account"
                className="p-2 hidden sm:inline-flex"
              >
                <User className="h-5 w-5" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
                className="relative p-2"
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center tabular-nums",
                    transparent
                      ? "bg-ivory text-espresso"
                      : "bg-espresso text-ivory"
                  )}
                >
                  {count}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-opacity duration-500",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-ivory text-espresso transition-transform duration-500 ease-velmora",
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          )}
          role="dialog"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between px-5 h-16">
            <Link to="/" className="font-serif text-2xl tracking-[0.18em]">
              VELMORA
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <div className="hairline" />
          <nav className="px-5 py-8 flex flex-col gap-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="font-serif text-3xl tracking-[0.05em]"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="hairline" />
          <div className="px-5 py-6 flex items-center gap-6 text-sm">
            <button type="button" className="flex items-center gap-2">
              <Search className="h-4 w-4" strokeWidth={1.5} /> Search
            </button>
            <button type="button" className="flex items-center gap-2">
              <User className="h-4 w-4" strokeWidth={1.5} /> Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
