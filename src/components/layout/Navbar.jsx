import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar({ transparent = true }) {
  const { summary, openCart } = useCart();
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

  // When transparent & not scrolled, use light text; otherwise ink on cream.
  const overHero = transparent && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-editorial",
          overHero
            ? "bg-transparent"
            : "bg-cream/95 backdrop-blur-sm border-b border-line"
        )}
        data-transparent={overHero ? "true" : "false"}
      >
        <div className="container-page flex items-center justify-between h-16 md:h-20">
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl md:text-2xl font-light tracking-[0.2em] transition-colors duration-500",
              overHero ? "text-ivory" : "text-ink"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center: nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "link-underline transition-colors duration-500",
                    overHero
                      ? "text-ivory"
                      : isActive
                        ? "text-ink"
                        : "text-mushroom hover:text-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-1 transition-colors duration-500 hover:opacity-70",
                overHero ? "text-ivory" : "text-ink"
              )}
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.4} />
            </button>
            <button
              type="button"
              aria-label={`Open cart, ${summary.count} items`}
              onClick={openCart}
              className={cn(
                "relative p-1 transition-colors duration-500 hover:opacity-70",
                overHero ? "text-ivory" : "text-ink"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.4} />
              {summary.count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-1 min-w-[16px] h-4 px-1 rounded-full text-[9px] font-medium flex items-center justify-center",
                    overHero
                      ? "bg-ivory text-ink"
                      : "bg-ink text-ivory"
                  )}
                >
                  {summary.count}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className={cn(
                "md:hidden p-1 transition-colors duration-500",
                overHero ? "text-ivory" : "text-ink"
              )}
            >
              <Menu className="w-5 h-5" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        cartCount={summary.count}
        onCartClick={openCart}
      />
    </>
  );
}

function MobileMenu({ open, onClose, cartCount, onCartClick }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-ink/60 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-ivory shadow-drawer animate-slideInRight flex flex-col">
        <div className="flex items-center justify-between h-16 px-5 border-b border-line">
          <span className="font-serif text-lg tracking-[0.2em] text-ink">VELMORA</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="p-1 text-ink"
          >
            <X className="w-5 h-5" strokeWidth={1.4} />
          </button>
        </div>
        <nav className="flex flex-col px-5 py-8 gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "font-serif text-2xl text-ink",
                  isActive ? "italic" : ""
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto px-5 py-6 border-t border-line flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              onClose();
              onCartClick();
            }}
            className="flex items-center gap-2 text-ink"
          >
            <ShoppingBag className="w-4 h-4" strokeWidth={1.4} />
            <span className="font-sans text-[11px] uppercase tracking-widest2">
              Cart {cartCount > 0 ? `(${cartCount})` : ""}
            </span>
          </button>
          <span className="font-sans text-[11px] uppercase tracking-widest2 text-mushroom">
            Free shipping
          </span>
        </div>
      </div>
    </div>
  );
}
