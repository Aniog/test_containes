import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { cn } from "../../lib/utils";

const links = [
  { to: "/shop", label: "Shop" },
  { to: "/shop/earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { count, openCart } = useCart();
  const location = useLocation();

  // Pages that use a full-bleed dark or warm hero start with a transparent
  // nav that turns solid after the user scrolls past the hero threshold.
  // The other pages are always solid.
  const transparentMode =
    location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (!transparentMode) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparentMode, location.pathname]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isSolid = !transparentMode || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out-soft",
          isSolid
            ? "bg-ivory/95 backdrop-blur border-b border-sand"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container-velmora flex h-16 md:h-20 items-center justify-between">
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl md:text-2xl font-light tracking-[0.32em] uppercase transition-colors duration-500",
              isSolid ? "text-espresso" : "text-ivory",
            )}
            aria-label="Velmora — home"
          >
            Velmora
          </Link>

          {/* Center: nav links (desktop) */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "nav-link relative py-1",
                    isSolid ? "text-espresso/90" : "text-ivory/90",
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full",
                    isActive && "after:w-full",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: search + cart + mobile menu trigger */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-2 transition-colors duration-300",
                isSolid
                  ? "text-espresso hover:text-gold-deep"
                  : "text-ivory hover:text-gold-soft",
              )}
            >
              <Search className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.4} />
            </button>

            <button
              type="button"
              aria-label={`Open cart with ${count} item${count === 1 ? "" : "s"}`}
              onClick={openCart}
              className={cn(
                "relative p-2 transition-colors duration-300",
                isSolid
                  ? "text-espresso hover:text-gold-deep"
                  : "text-ivory hover:text-gold-soft",
              )}
            >
              <ShoppingBag className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.4} />
              <span
                className={cn(
                  "absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 grid place-items-center text-[9px] font-sans font-medium tracking-wider",
                  isSolid
                    ? "bg-espresso text-ivory"
                    : "bg-ivory text-espresso",
                )}
                aria-hidden="true"
              >
                {count}
              </span>
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "md:hidden p-2 transition-colors duration-300",
                isSolid
                  ? "text-espresso hover:text-gold-deep"
                  : "text-ivory hover:text-gold-soft",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" strokeWidth={1.4} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.4} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-30 md:hidden transition-all duration-500 ease-out-soft",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[78%] max-w-sm bg-ivory shadow-soft-lg transition-transform duration-500 ease-out-soft",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="px-6 pt-24 pb-10 flex flex-col gap-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="font-serif text-2xl font-light text-espresso"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="hairline mt-4" />
            <NavLink
              to="/shop"
              className="font-sans text-xs uppercase tracking-widest2 text-ink-soft"
            >
              All jewelry
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
