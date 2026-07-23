import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import SearchOverlay from "@/components/layout/SearchOverlay";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export default function Nav() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const transparentRoutes = ["/"];
  const startsTransparent = transparentRoutes.includes(location.pathname);
  const solid = scrolled || !startsTransparent || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          solid
            ? "border-b border-champagne bg-cream/95 shadow-[0_8px_30px_-18px_rgba(34,25,16,0.3)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <button
            type="button"
            aria-label="Open menu"
            className={cn(
              "p-2 transition-colors md:hidden",
              solid ? "text-espresso" : "text-cream"
            )}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <nav
            className={cn(
              "hidden flex-1 items-center gap-8 md:flex",
              solid ? "text-espresso" : "text-cream"
            )}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "group relative text-[11px] font-semibold uppercase tracking-[0.28em] transition-colors",
                    solid ? "hover:text-gold" : "hover:text-champagne",
                    isActive && (solid ? "text-gold" : "text-champagne")
                  )
                }
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          <Link
            to="/"
            className={cn(
              "font-display text-2xl font-semibold tracking-[0.35em] transition-colors md:text-[26px]",
              solid ? "text-espresso" : "text-cream"
            )}
          >
            VELMORA
          </Link>

          <div
            className={cn(
              "flex flex-1 items-center justify-end gap-1 md:gap-2",
              solid ? "text-espresso" : "text-cream"
            )}
          >
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="p-2 transition-transform duration-300 hover:scale-110"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={openCart}
              className="relative p-2 transition-transform duration-300 hover:scale-110"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-cream">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-400 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div
          className="absolute inset-0 bg-espresso/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream transition-transform duration-500 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between border-b border-champagne px-6 py-5">
            <span className="font-display text-xl font-semibold tracking-[0.3em] text-espresso">
              VELMORA
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-8">
            {NAV_LINKS.map((link, i) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={cn(
                  "border-b border-champagne/70 py-5 font-display text-2xl font-medium text-espresso transition-all duration-500",
                  mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                )}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <p className="mt-auto px-6 pb-8 text-[11px] uppercase tracking-[0.24em] text-taupe">
            Demi-fine jewelry · 18k gold
          </p>
        </div>
      </div>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
