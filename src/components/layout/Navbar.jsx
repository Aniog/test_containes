import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

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

  // Force solid on non-home pages so the bar is always legible.
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return undefined;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.search]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || !isHome;
  const onDark = solid; // Solid variant always uses espresso text
  const textColor = onDark ? "text-espresso" : "text-cream";
  const subTextColor = onDark ? "text-espresso-soft" : "text-cream/80";
  const borderColor = onDark ? "border-espresso/10" : "border-cream/15";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-elegant",
          solid
            ? "bg-cream/95 backdrop-blur-md border-b border-espresso/10"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="mx-auto max-w-screen-2xl px-5 md:px-8 lg:px-12">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Mobile: hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className={cn("md:hidden -ml-1 p-2", textColor)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Left: logo */}
            <Link
              to="/"
              className={cn(
                "font-serif text-2xl md:text-[28px] tracking-[0.18em] font-light",
                textColor,
              )}
              aria-label="Velmora home"
            >
              VELMORA
            </Link>

            {/* Center: nav links */}
            <nav
              className={cn(
                "hidden md:flex items-center gap-9",
                subTextColor,
              )}
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "text-xs uppercase tracking-label font-medium relative py-1 transition-colors duration-300",
                      "hover:text-espresso",
                      isActive && location.pathname === link.to.split("?")[0]
                        ? "text-espresso"
                        : "",
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right: search + cart */}
            <div className={cn("flex items-center gap-1 md:gap-3", textColor)}>
              <button
                type="button"
                aria-label="Search"
                className="p-2 transition-opacity duration-300 hover:opacity-70"
              >
                <Search className="h-5 w-5" strokeWidth={1.4} />
              </button>
              <button
                type="button"
                aria-label="Open cart"
                onClick={openCart}
                className="relative p-2 transition-opacity duration-300 hover:opacity-70"
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
                {itemCount > 0 && (
                  <span
                    className={cn(
                      "absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-medium flex items-center justify-center",
                      solid
                        ? "bg-espresso text-cream"
                        : "bg-cream text-espresso",
                    )}
                  >
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-opacity duration-500 ease-elegant",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-espresso/40"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-cream border-b border-espresso/10",
            "transition-transform duration-500 ease-elegant",
            mobileOpen ? "translate-y-0" : "-translate-y-full",
          )}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-serif text-2xl tracking-[0.18em] font-light text-espresso">
              VELMORA
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 text-espresso"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col px-5 pb-8 pt-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "py-4 font-serif text-2xl font-light text-espresso border-b",
                    borderColor,
                    isActive ? "italic" : "",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/shop"
              className="mt-6 text-xs uppercase tracking-label text-taupe"
            >
              View all pieces →
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
