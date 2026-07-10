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

export default function Navbar() {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Solid on scroll OR if not on the homepage
  const onHome = location.pathname === "/";
  const solid = scrolled || !onHome;
  const useDarkText = solid;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 editorial-transition",
          solid
            ? "bg-sand-50/95 backdrop-blur border-b border-sand-200"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link
              to="/"
              className={cn(
                "font-serif text-xl md:text-2xl tracking-widest3 font-light editorial-transition",
                useDarkText ? "text-ink-950" : "text-textondark"
              )}
              aria-label="Velmora — Home"
            >
              VELMORA
            </Link>

            <nav
              aria-label="Primary"
              className="hidden md:flex items-center gap-10"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "label-cap editorial-transition relative py-1",
                      useDarkText
                        ? isActive
                          ? "text-ink-950"
                          : "text-textmute hover:text-ink-950"
                        : isActive
                        ? "text-textondark"
                        : "text-textondark/85 hover:text-textondark"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
              <button
                type="button"
                aria-label="Search"
                className={cn(
                  "p-2 editorial-transition",
                  useDarkText ? "text-ink-950 hover:text-champagne-600" : "text-textondark hover:text-champagne-300"
                )}
              >
                <Search size={18} strokeWidth={1.4} />
              </button>
              <button
                type="button"
                onClick={openCart}
                aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
                className={cn(
                  "relative p-2 editorial-transition",
                  useDarkText ? "text-ink-950 hover:text-champagne-600" : "text-textondark hover:text-champagne-300"
                )}
              >
                <ShoppingBag size={18} strokeWidth={1.4} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full text-[10px] font-medium",
                      useDarkText
                        ? "bg-ink-950 text-textondark"
                        : "bg-champagne-500 text-ink-950"
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "md:hidden p-2 editorial-transition",
                  useDarkText ? "text-ink-950" : "text-textondark"
                )}
              >
                <Menu size={20} strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden editorial-transition",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/50 editorial-transition",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[80%] max-w-sm bg-sand-50 shadow-xl editorial-transition flex flex-col",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-sand-200">
            <span className="font-serif text-xl tracking-widest3">VELMORA</span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-ink-950"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex-1 px-6 py-8 flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-serif text-3xl font-light",
                    isActive ? "text-ink-950" : "text-textmute hover:text-ink-950"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 pb-8 text-textmute label-cap">
            Free shipping over $80 · 30-day returns
          </div>
        </div>
      </div>
    </>
  );
}
