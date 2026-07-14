import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop/earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

function Logo({ tone = "light" }) {
  const isLight = tone === "light";
  return (
    <Link
      to="/"
      aria-label="Velmora home"
      className={cn(
        "font-serif text-2xl md:text-[26px] tracking-[0.18em] font-medium select-none",
        isLight ? "text-bone" : "text-ink"
      )}
    >
      VELMORA
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, openCart } = useCart();
  const location = useLocation();

  // Hero is the only place the nav goes transparent.
  // Use the route to decide the default tone, and the scroll state to switch.
  const isHome = location.pathname === "/";
  const tone = !isHome || scrolled ? "dark" : "light";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const onLightNav = tone === "light";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-editorial",
          onLightNav
            ? "bg-transparent"
            : "bg-bone/90 backdrop-blur-md border-b border-hairline/60"
        )}
      >
        <div className="container-editorial flex items-center h-16 md:h-20">
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={cn(
              "md:hidden -ml-2 p-2 transition-colors",
              onLightNav ? "text-bone" : "text-ink"
            )}
          >
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>

          {/* Logo (mobile) */}
          <div className="md:hidden flex-1 flex justify-center">
            <Logo tone={tone === "light" ? "light" : "dark"} />
          </div>

          {/* Logo (desktop) */}
          <div className="hidden md:flex flex-1">
            <Logo tone={onLightNav ? "light" : "dark"} />
          </div>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-[11px] uppercase tracking-editorial font-medium relative py-2",
                    "transition-colors duration-500 ease-editorial",
                    onLightNav
                      ? "text-bone hover:text-gold-soft"
                      : "text-ink hover:text-gold",
                    isActive &&
                      (onLightNav
                        ? "text-gold-soft"
                        : "text-gold")
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 right-0 -bottom-0.5 h-px bg-current origin-left transition-transform duration-500 ease-editorial",
                        isActive ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-2 transition-colors",
                onLightNav
                  ? "text-bone hover:text-gold-soft"
                  : "text-ink hover:text-gold"
              )}
            >
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors",
                onLightNav
                  ? "text-bone hover:text-gold-soft"
                  : "text-ink hover:text-gold"
              )}
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span
                  aria-label={`${itemCount} items in cart`}
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] flex items-center justify-center font-sans font-medium",
                    onLightNav
                      ? "bg-bone text-ink"
                      : "bg-ink text-bone"
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
          "fixed inset-0 z-[60] bg-ink text-bone transition-all duration-500 ease-editorial md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="container-editorial flex items-center h-16">
          <Logo tone="light" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="ml-auto p-2 text-bone"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="container-editorial flex flex-col gap-8 pt-12">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="font-serif text-4xl font-light text-bone hover:text-gold-soft transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
          <div className="mt-12 pt-8 border-t border-hairline-dark space-y-4 text-sm text-muted-dark">
            <p>Free worldwide shipping over $75</p>
            <p>30-day returns · Hypoallergenic</p>
          </div>
        </nav>
      </div>
    </>
  );
}
