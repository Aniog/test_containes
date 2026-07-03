import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext.jsx";
import { cn } from "../../lib/cn.js";

const CENTER_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

// The nav starts transparent over the hero and turns into a solid bar
// with a hairline divider once the user scrolls past the hero. On
// non-home routes we render the solid variant by default.
export default function Nav({ onOpenSearch, variant = "auto" }) {
  const { itemCount, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (variant === "solid") {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isTransparent = variant === "auto" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out",
          isTransparent
            ? "bg-transparent"
            : "bg-ink-950/95 backdrop-blur supports-[backdrop-filter]:bg-ink-950/80 border-b border-ink-800"
        )}
      >
        <div className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 md:h-20 md:px-10">
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-[22px] font-medium tracking-wider2 md:text-[24px]",
              isTransparent ? "text-ink-100" : "text-ink-100"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center: links */}
          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {CENTER_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "font-sans text-[11px] font-medium uppercase tracking-widest2 transition-colors duration-300",
                    isTransparent
                      ? "text-ink-100/90 hover:text-gold-300"
                      : "text-ink-200 hover:text-gold-300",
                    isActive && "text-gold-300"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: icons */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              type="button"
              onClick={onOpenSearch}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                isTransparent
                  ? "text-ink-100 hover:text-gold-300"
                  : "text-ink-100 hover:text-gold-300"
              )}
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink-100 transition-colors duration-300 hover:text-gold-300"
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-400 px-1 font-sans text-[9px] font-semibold text-ink-950">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink-100 transition-colors duration-300 hover:text-gold-300 md:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-[86%] max-w-sm bg-ink-950 shadow-soft transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-label="Menu"
        >
          <div className="flex h-16 items-center justify-between border-b border-ink-800 px-6">
            <span className="font-serif text-[18px] tracking-wider2 text-ink-100">
              VELMORA
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ink-100"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile primary">
            {CENTER_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="border-b border-ink-800 py-5 font-serif text-[28px] font-light text-ink-100 transition-colors hover:text-gold-300"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
