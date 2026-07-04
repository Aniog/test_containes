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

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export default function Header() {
  const scrolled = useScrolled(40);
  const { itemCount, openCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // "Transparent over hero" only on the homepage; on other pages the header
  // should always be solid ivory for legibility.
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
          transparent
            ? "bg-transparent text-ink"
            : "bg-cream/95 backdrop-blur-md text-ink border-b border-hairline",
        )}
      >
        <div className="container-editorial">
          <div className="grid grid-cols-3 items-center h-16 md:h-20">
            {/* Mobile menu trigger */}
            <div className="flex md:hidden">
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className="p-2 -ml-2"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-10">
              {NAV_LINKS.slice(0, 2).map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-300",
                      "hover:text-gold-deep",
                      isActive ? "text-ink" : "text-ink/80",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Logo — centered */}
            <Link
              to="/"
              aria-label="Velmora home"
              className="justify-self-center text-center"
            >
              <span className="font-serif text-[22px] md:text-[26px] tracking-[0.32em] font-medium">
                VELMORA
              </span>
            </Link>

            {/* Right cluster */}
            <div className="flex items-center gap-3 md:gap-5 justify-end">
              <div className="hidden md:flex items-center gap-10 mr-2">
                {NAV_LINKS.slice(2).map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "text-[12px] uppercase tracking-[0.22em] font-medium transition-colors duration-300",
                        "hover:text-gold-deep",
                        isActive ? "text-ink" : "text-ink/80",
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
              <button
                type="button"
                aria-label="Search"
                className="p-2 hover:text-gold-deep transition-colors"
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${itemCount} ${itemCount === 1 ? "item" : "items"}`}
                onClick={openCart}
                className="p-2 hover:text-gold-deep transition-colors relative"
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span
                    aria-hidden="true"
                    className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full bg-ink text-cream text-[9px] font-medium tracking-normal flex items-center justify-center tabular-nums"
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-ink/40"
        />
        <nav
          className={cn(
            "absolute left-0 top-0 h-full w-[78%] max-w-xs bg-cream px-6 py-6 flex flex-col transition-transform duration-500 ease-editorial",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl tracking-[0.32em]">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="hairline my-8" />
          <ul className="space-y-5">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="font-serif text-2xl text-ink hover:text-gold-deep transition-colors"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="hairline my-8" />
          <p className="eyebrow">Free worldwide shipping over $75</p>
        </nav>
      </div>
    </>
  );
}
