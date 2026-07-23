import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const { summary, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Home hero is dark — when on home and not scrolled, nav text is cream.
  // On all other pages, nav text is dark.
  const onDarkHero = location.pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-luxury",
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md border-b border-cream-200"
          : onDarkHero
          ? "bg-transparent border-b border-transparent"
          : "bg-cream-50 border-b border-cream-200"
      )}
    >
      <div className="container-editorial">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "md:hidden p-2 -ml-2 transition-colors duration-300",
              scrolled || !onDarkHero ? "text-ink-900" : "text-cream-50"
            )}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" strokeWidth={1.4} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif font-medium text-[20px] md:text-[22px] tracking-nav uppercase transition-colors duration-300",
              scrolled || !onDarkHero ? "text-ink-900" : "text-cream-50"
            )}
            aria-label="Velmora home"
          >
            Velmora
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] font-medium uppercase tracking-btn transition-colors duration-300 relative py-1",
                    scrolled || !onDarkHero
                      ? isActive
                        ? "text-ink-900"
                        : "text-ink-700 hover:text-ink-900"
                      : isActive
                      ? "text-cream-50"
                      : "text-cream-200 hover:text-cream-50",
                    "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-gold-500 after:transition-transform after:duration-300 after:origin-left",
                    isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-2 transition-colors duration-300",
                scrolled || !onDarkHero ? "text-ink-900 hover:text-gold-600" : "text-cream-50 hover:text-gold-300"
              )}
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart with ${summary.count} items`}
              className={cn(
                "relative p-2 transition-colors duration-300",
                scrolled || !onDarkHero ? "text-ink-900 hover:text-gold-600" : "text-cream-50 hover:text-gold-300"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
              {summary.count > 0 ? (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center transition-colors duration-300",
                    scrolled || !onDarkHero
                      ? "bg-ink-900 text-cream-50"
                      : "bg-cream-50 text-cocoa-900"
                  )}
                  aria-hidden="true"
                >
                  {summary.count}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-cocoa-900/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute top-0 left-0 bottom-0 w-[88%] max-w-sm bg-cream-50 shadow-soft transition-transform duration-500 ease-luxury flex flex-col",
          open ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-cream-200">
          <Link
            to="/"
            onClick={onClose}
            className="font-serif font-medium text-[20px] tracking-nav uppercase text-ink-900"
          >
            Velmora
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 text-ink-900"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>
        <nav className="flex-1 px-5 py-8 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "block py-4 text-2xl font-serif font-light border-b border-cream-200 transition-colors duration-300",
                  isActive ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="px-5 py-6 border-t border-cream-200">
          <p className="eyebrow mb-3">Customer care</p>
          <p className="text-sm text-ink-700 leading-relaxed">
            Free worldwide shipping over $75. 30-day returns.
          </p>
        </div>
      </aside>
    </div>
  );
}
