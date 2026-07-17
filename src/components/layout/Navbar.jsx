import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/shop", label: "Shop" },
  { to: "/shop?category=earrings", label: "Earrings" },
  { to: "/shop?category=necklaces", label: "Necklaces" },
  { to: "/shop?category=huggies", label: "Huggies" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
];

// Pages where the navbar should start transparent (only the homepage hero).
const TRANSPARENT_PREFIXES = ["/"];

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

function isTransparentRoute(pathname) {
  return TRANSPARENT_PREFIXES.some((p) => pathname === p);
}

export function Navbar() {
  const { itemCount, openCart } = useCart();
  const { pathname } = useLocation();
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  const transparent = isTransparentRoute(pathname) && !scrolled;
  const solid = !transparent;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          transparent
            ? "bg-transparent text-ink-onDark"
            : "bg-canvas/95 backdrop-blur-md text-ink border-b border-line-soft",
        )}
      >
        <div className="container-editorial flex h-16 items-center justify-between md:h-20">
          {/* Mobile: hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="md:hidden -ml-2 p-2"
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.4} />
          </button>

          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-xl tracking-wider2 md:text-2xl"
            aria-label="Velmora home"
          >
            VELMORA
          </Link>

          {/* Center links */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.slice(0, 4).map((l) => (
              <NavLink
                key={l.to + l.label}
                to={l.to}
                className={({ isActive }) =>
                  cn(
                    "text-[11px] uppercase tracking-wider2 font-medium transition-colors hover:opacity-100",
                    isActive
                      ? "opacity-100"
                      : "opacity-80 hover:opacity-100",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 md:gap-3">
            <button
              type="button"
              className="p-2"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.4} />
            </button>
            <Link to="/about" className="hidden md:inline text-[11px] uppercase tracking-wider2 font-medium opacity-80 hover:opacity-100">
              About
            </Link>
            <Link to="/journal" className="hidden md:inline text-[11px] uppercase tracking-wider2 font-medium opacity-80 hover:opacity-100">
              Journal
            </Link>
            <button
              type="button"
              onClick={openCart}
              className="relative p-2"
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              <ShoppingBag size={20} strokeWidth={1.4} />
              {itemCount > 0 && (
                <span
                  className={cn(
                    "absolute -right-0.5 -top-0.5 grid h-4 min-w-[16px] place-items-center rounded-full px-1 text-[10px] font-medium",
                    transparent
                      ? "bg-ink-onDark text-espresso"
                      : "bg-espresso text-ink-onDark",
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
          "fixed inset-0 z-50 md:hidden transition-opacity",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/60"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 w-[85%] max-w-sm bg-canvas shadow-drawer transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-line-soft px-5">
            <Link
              to="/"
              className="font-serif text-xl tracking-wider2 text-ink"
              onClick={() => setMobileOpen(false)}
            >
              VELMORA
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex flex-col px-8 py-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-4 font-serif text-2xl text-ink border-b border-line-soft",
                    isActive && "italic",
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Navbar;
