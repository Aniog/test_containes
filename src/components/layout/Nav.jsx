import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Pages with a dark hero can keep nav transparent until scroll.
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          transparent
            ? "bg-transparent text-ivory"
            : "bg-ivory/95 backdrop-blur-md text-ink border-b border-line"
        )}
        style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)" }}
      >
        <div className="container-editorial">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile menu trigger */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="md:hidden -ml-2 p-2"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Left: Logo */}
            <Link
              to="/"
              className="font-display text-2xl md:text-[28px] leading-none tracking-[0.18em] font-medium"
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Center: Nav links */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
              {LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "label-nav relative py-2 transition-opacity duration-300",
                      "hover:opacity-70",
                      isActive && "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-current"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: icons */}
            <div className="flex items-center gap-1 md:gap-2 -mr-2">
              <button
                type="button"
                aria-label="Search"
                className="p-2 hover:opacity-70 transition-opacity"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                aria-label={`Open cart with ${itemCount} item${itemCount === 1 ? "" : "s"}`}
                onClick={openCart}
                className="relative p-2 hover:opacity-70 transition-opacity"
              >
                <ShoppingBag className="w-5 h-5" />
                <span
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center transition-all duration-300",
                    itemCount > 0
                      ? transparent
                        ? "bg-ivory text-ink"
                        : "bg-ink text-ivory"
                      : "bg-transparent"
                  )}
                >
                  {itemCount > 0 ? itemCount : ""}
                </span>
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
          className="absolute inset-0 bg-ink/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 bottom-0 w-[86%] max-w-sm bg-ivory text-ink transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.2, 0.7, 0.2, 1)" }}
        >
          <div className="flex items-center justify-between h-16 px-6 border-b border-line">
            <span className="font-display text-xl tracking-[0.18em]">VELMORA</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="px-6 py-10 flex flex-col gap-6" aria-label="Mobile">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-display text-3xl tracking-wide",
                    isActive ? "text-gold" : "text-ink"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 mt-auto pb-10 text-mute text-xs tracking-widest uppercase">
            Free worldwide shipping · 30-day returns
          </div>
        </div>
      </div>
    </>
  );
}
