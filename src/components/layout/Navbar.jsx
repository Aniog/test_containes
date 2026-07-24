import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections/earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ variant = "auto" }) {
  const { itemCount, openCart } = useCart();
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

  // variant: "auto" (transparent on hero, solid when scrolled),
  //          "solid" (always ink-800 over light surface),
  //          "dark"  (always ivory text on dark surface).
  const mode =
    variant === "solid"
      ? "solid"
      : variant === "dark"
      ? "dark"
      : scrolled
      ? "solid"
      : "dark";

  const isTransparent = mode === "dark";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe",
        isTransparent
          ? "bg-transparent text-ivory-50"
          : "bg-ivory-50/95 text-ink-800 backdrop-blur-sm border-b border-ink-800/10"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Mobile hamburger */}
        <button
          type="button"
          className="-ml-2 inline-flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <Link
          to="/"
          className="font-serif text-[26px] sm:text-[28px] leading-none tracking-[0.18em] font-medium"
          aria-label="Velmora — home"
        >
          <span id="site-title">VELMORA</span>
        </Link>

        {/* Center nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "link-underline font-sans uppercase tracking-widest2 text-[11px]",
                    isActive && "text-gold-400"
                  )
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center hover:text-gold-400 transition-colors duration-300"
            aria-label="Search"
          >
            <Search className="h-5 w-5" strokeWidth={1.4} />
          </button>
          <Link
            to="/account"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center hover:text-gold-400 transition-colors duration-300"
            aria-label="Account"
          >
            <User className="h-5 w-5" strokeWidth={1.4} />
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="relative inline-flex h-10 w-10 items-center justify-center hover:text-gold-400 transition-colors duration-300"
            aria-label={`Open cart, ${itemCount} items`}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            {itemCount > 0 && (
              <span className="absolute -bottom-0.5 -right-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-400 px-1 text-[10px] font-sans font-medium text-ink-900">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-ivory-50 text-ink-800">
          <div className="flex h-16 items-center justify-between px-5 border-b border-ink-800/10">
            <span className="font-serif text-[24px] tracking-[0.18em]">VELMORA</span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="px-5 py-8 space-y-6">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="font-serif text-3xl text-ink-800 hover:text-gold-500 transition-colors"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-5 mt-8 flex items-center gap-4">
            <button type="button" aria-label="Search" className="inline-flex h-10 w-10 items-center justify-center">
              <Search className="h-5 w-5" strokeWidth={1.4} />
            </button>
            <Link to="/account" aria-label="Account" className="inline-flex h-10 w-10 items-center justify-center">
              <User className="h-5 w-5" strokeWidth={1.4} />
            </Link>
            <button type="button" onClick={openCart} aria-label="Open cart" className="inline-flex h-10 w-10 items-center justify-center">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
