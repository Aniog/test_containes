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

function useScrolled(threshold = 30) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

const Navbar = () => {
  const { itemCount, openCart } = useCart();
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const transparentOverHero = isHome && !scrolled;

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu open
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
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparentOverHero
            ? "bg-transparent text-cream"
            : "bg-background/95 text-foreground backdrop-blur-sm border-b border-border"
        )}
      >
        <div className="container-velmora flex h-20 items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            type="button"
            className="md:hidden -ml-2 p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} strokeWidth={1.5} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-2xl tracking-widest3 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0",
              "transition-colors"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] font-medium uppercase tracking-widest2 transition-colors duration-300 hover:opacity-70",
                    isActive && "opacity-100",
                    isActive && "underline underline-offset-[6px] decoration-1"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              className="p-2 transition-opacity hover:opacity-70"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2 transition-opacity hover:opacity-70"
              aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center rounded-full text-[10px] font-medium",
                    transparentOverHero
                      ? "bg-cream text-ink"
                      : "bg-ink text-cream"
                  )}
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[60] bg-background text-foreground transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container-velmora flex h-20 items-center justify-between">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-2xl tracking-widest3"
          >
            VELMORA
          </Link>
          <button
            type="button"
            className="-mr-2 p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="container-velmora mt-8 flex flex-col gap-6" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="font-serif text-4xl"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="my-6 hairline" />
          <div className="flex flex-col gap-3 text-[11px] uppercase tracking-widest2 text-muted-foreground">
            <span>Free shipping over $75</span>
            <span>30-day returns</span>
            <span>Hypoallergenic</span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
