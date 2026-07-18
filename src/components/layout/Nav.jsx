import { useEffect, useState } from "react";
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

export default function Nav() {
  const { summary, openCart } = useCart();
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Pages other than the home page should always have the solid nav.
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close mobile menu on route change.
  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          solid
            ? "bg-background/95 backdrop-blur-md border-b border-hairline"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden p-2 -ml-2 text-ivory hover:text-gold transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-2xl lg:text-[26px] tracking-[0.32em] font-medium text-ivory hover:text-gold transition-colors"
          >
            VELMORA
          </Link>

          {/* Center nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-[12px] font-sans uppercase tracking-button font-medium transition-colors duration-300",
                    isActive ? "text-gold" : "text-ivory hover:text-gold",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-ivory hover:text-gold transition-colors"
            >
              <Search className="w-5 h-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Cart, ${summary.count} items`}
              className="relative p-2 text-ivory hover:text-gold transition-colors"
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
              {summary.count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-gold text-background text-[10px] font-medium flex items-center justify-center">
                  {summary.count}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-30 lg:hidden transition-all duration-500",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/60 transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute top-16 left-0 right-0 bg-surface border-b border-hairline transition-all duration-500",
            mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
          )}
        >
          <nav className="flex flex-col px-6 py-6 gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "py-3 text-[13px] font-sans uppercase tracking-button font-medium border-b border-hairline/60 last:border-b-0 transition-colors",
                    isActive ? "text-gold" : "text-ivory",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
