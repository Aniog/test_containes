import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/shop", label: "Shop" },
  { to: "/collections", label: "Collections" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

export function Navbar() {
  const { itemCount, setOpen, bump } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Transparent over hero, solid after scroll. Force solid on non-home routes.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const solid = !isHome || scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out",
          solid
            ? "bg-bone/95 backdrop-blur-sm border-b border-hairline"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16 md:h-20">
          {/* Left: logo */}
          <Link
            to="/"
            className={cn(
              "font-serif text-xl md:text-2xl tracking-wider2 font-light transition-colors duration-300",
              solid ? "text-ink" : "text-bone"
            )}
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center: links */}
          <ul className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-[11px] uppercase tracking-wider2 font-medium transition-colors duration-300",
                      solid
                        ? isActive
                          ? "text-gold-deep"
                          : "text-ink hover:text-gold-deep"
                        : isActive
                        ? "text-bone"
                        : "text-bone/90 hover:text-bone"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right: search + cart */}
          <div className="flex items-center gap-3 md:gap-5">
            <button
              type="button"
              aria-label="Search"
              className={cn(
                "p-1 transition-colors duration-300",
                solid ? "text-ink hover:text-gold-deep" : "text-bone hover:text-bone/80"
              )}
            >
              <Search className="w-5 h-5" strokeWidth={1.25} />
            </button>
            <button
              type="button"
              aria-label="Open cart"
              onClick={() => setOpen(true)}
              className={cn(
                "relative p-1 transition-colors duration-300",
                solid ? "text-ink hover:text-gold-deep" : "text-bone hover:text-bone/80"
              )}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.25} />
              {itemCount > 0 && (
                <span
                  key={bump}
                  className={cn(
                    "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-medium rounded-full animate-fade-in",
                    solid ? "bg-ink text-bone" : "bg-bone text-ink"
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
                "md:hidden p-1 transition-colors duration-300",
                solid ? "text-ink" : "text-bone"
              )}
            >
              <Menu className="w-5 h-5" strokeWidth={1.25} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink/40 animate-fade-in"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-0 ml-auto flex">
            <div className="ml-auto h-full w-full sm:max-w-md bg-bone shadow-drawer animate-slide-in-right flex flex-col">
              <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
                <span className="font-serif text-xl tracking-wider2 text-ink">VELMORA</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-1 text-ink"
                >
                  <X className="w-5 h-5" strokeWidth={1.25} />
                </button>
              </div>
              <ul className="flex-1 flex flex-col px-6 py-10 gap-6">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="font-serif text-3xl text-ink hover:text-gold-deep transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
