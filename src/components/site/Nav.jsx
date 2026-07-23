import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totals, openCart } = useCart();
  const location = useLocation();

  // Pages where nav should stay solid (no transparent hero)
  const isShopPage = location.pathname.startsWith("/shop") || location.pathname.startsWith("/product") || location.pathname.startsWith("/collections") || location.pathname.startsWith("/about") || location.pathname.startsWith("/journal");
  const transparent = !scrolled && !isShopPage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "nav-shell fixed inset-x-0 top-0 z-40",
          scrolled || isShopPage ? "is-scrolled" : "is-transparent"
        )}
        data-transparent={transparent ? "true" : "false"}
      >
        <div className="mx-auto max-w-site px-5 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "md:hidden -ml-2 p-2",
                transparent ? "text-ivory-50" : "text-cocoa-900"
              )}
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            </button>

            {/* Logo */}
            <Link
              to="/"
              aria-label="Velmora home"
              className={cn(
                "font-display text-2xl md:text-[26px] tracking-[0.18em] font-medium",
                transparent ? "text-ivory-50" : "text-cocoa-900"
              )}
            >
              VELMORA
            </Link>

            {/* Center nav */}
            <nav className="hidden md:flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[12px] font-medium tracking-button uppercase transition-colors duration-200 relative",
                      transparent
                        ? "text-ivory-50/90 hover:text-ivory-50"
                        : "text-cocoa-700 hover:text-cocoa-900",
                      isActive && !transparent && "text-cocoa-900"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && !transparent && (
                        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-champagne-500" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right side icons */}
            <div className="flex items-center gap-1 md:gap-2">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2.5 transition-colors",
                  transparent
                    ? "text-ivory-50 hover:text-champagne-300"
                    : "text-cocoa-900 hover:text-brass-700"
                )}
              >
                <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                aria-label={`Open cart, ${totals.count} items`}
                onClick={openCart}
                className={cn(
                  "relative p-2.5 transition-colors",
                  transparent
                    ? "text-ivory-50 hover:text-champagne-300"
                    : "text-cocoa-900 hover:text-brass-700"
                )}
              >
                <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
                {totals.count > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center",
                      transparent
                        ? "bg-champagne-500 text-espresso-900"
                        : "bg-espresso-900 text-ivory-50"
                    )}
                    aria-hidden="true"
                  >
                    {totals.count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 drawer-mask"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 w-[88%] max-w-sm bg-ivory-50 shadow-2xl flex flex-col transition-transform duration-400 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-cocoa-900/8">
            <span className="font-display text-xl tracking-[0.18em] text-cocoa-900">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-cocoa-900"
            >
              <X className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col p-5 gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "py-4 border-b border-cocoa-900/8 font-display text-2xl tracking-[0.08em] text-cocoa-900",
                    isActive && "text-brass-700"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto p-5 border-t border-cocoa-900/8">
            <p className="eyebrow mb-2">Customer Care</p>
            <p className="text-sm text-cocoa-700">care@velmora.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
