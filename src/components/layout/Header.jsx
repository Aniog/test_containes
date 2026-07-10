import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // transparent on home when at top, otherwise solid
  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "nav-scrolled" : transparent ? "bg-transparent" : "nav-scrolled"
        )}
      >
        <div
          className={cn(
            "max-w-editorial mx-auto px-5 sm:px-8 flex items-center justify-between transition-all duration-300",
            scrolled ? "h-16" : "h-20 sm:h-24"
          )}
        >
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "md:hidden -ml-2 p-2",
              transparent ? "text-cream" : "text-ink"
            )}
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl sm:text-2xl tracking-widest2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transition-colors duration-300",
              transparent ? "text-cream" : "text-ink"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "nav-link font-sans text-[0.72rem] tracking-widest2 uppercase font-medium transition-colors",
                    transparent ? "text-cream" : "text-ink",
                    isActive && "active"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-2 transition-colors",
                transparent ? "text-cream hover:text-cream/80" : "text-ink hover:text-gold"
              )}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} items`}
              className={cn(
                "relative p-2 transition-colors",
                transparent ? "text-cream hover:text-cream/80" : "text-ink hover:text-gold"
              )}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full text-[0.6rem] font-medium font-sans",
                    transparent ? "bg-cream text-ink" : "bg-ink text-cream"
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
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-ink/50"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl transition-transform duration-500 ease-out flex flex-col",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-20 border-b border-hairline">
            <Link to="/" className="font-serif text-2xl tracking-widest2">VELMORA</Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 -mr-2"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "block py-4 font-serif text-3xl text-ink border-b border-hairline",
                    isActive && "text-gold"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto px-6 py-6 border-t border-hairline text-xs text-muted">
            <p className="mb-2 tracking-widest2 uppercase">Velmora Fine Jewelry</p>
            <p>Crafted to be treasured.</p>
          </div>
        </div>
      </div>
    </>
  );
}
